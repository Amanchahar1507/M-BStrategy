"use client";

import Image from "next/image";
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
            {/* ====== CORPORATE HERO ====== */}
            <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services_hero_corporate.png"
                        alt="M&B Strategy Corporate Team"
                        fill
                        className="object-cover opacity-15 scale-105 saturate-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                </div>

                {/* Floating ambient orbs — crisp brand colors */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-30">
                    <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79, 87, 223, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute top-[40%] right-[5%] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, rgba(253, 214, 59, 0.35) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-block py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase text-sm font-bold mb-6 tracking-wide">
                                Our Masterplan
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Growth Engines Engineered for Scale"
                            className="text-4xl font-extrabold text-dark sm:text-5xl leading-[1.1] tracking-tight"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                                We focus on three essential growth pillars that every modern brand
                                needs to outpace the competition. Strategy first. Execution second. Results always.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                                <Button href="#services" variant="primary" className="shadow-[0_4px_14px_0_rgba(79,87,223,0.39)]">
                                    Explore Our Services
                                </Button>
                                <Button href="/contact" variant="outline" className="text-dark border-gray-300 hover:border-dark hover:bg-dark hover:text-white">
                                    Book a Consultation
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ====== SECTION HEADING ====== */}
            <section id="services" className="relative py-20 overflow-hidden bg-soft-gray border-y border-gray-200">
                <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl mb-6">
                            Pillars of <span className="text-primary block mt-2">Performance</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
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
                            <BlobImage
                                src="/images/services_pillar_email.png"
                                alt="Email Marketing Visualization"
                            />
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                                    <EnvelopeIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
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
                                <h3 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
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
                            <BlobImage
                                src="/images/services_pillar_seo.png"
                                alt="SEO Optimisation Visualization"
                            />
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
                            <BlobImage
                                src="/images/services_pillar_social.png"
                                alt="Social Media Visualization"
                            />
                            <div className="space-y-6">
                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 text-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    <MegaphoneIcon className="h-6 w-6" />
                                </div>
                                <h3 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
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

            {/* ====== WHY WORK WITH US (CLEAN CARDS) ====== */}
            <section className="relative py-28 overflow-hidden bg-soft-gray border-t border-gray-200">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Sticky Left Content */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <FadeIn>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl mb-6 leading-tight">
                                    Why Partner With <span className="text-primary">M&B Strategy?</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    We aren&apos;t just order-takers. We act as an extension of your team, bringing senior-level strategy and relentless execution to every single campaign.
                                </p>

                                <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-primary/5">
                                    <div className="text-5xl font-bold text-primary mb-2">150+</div>
                                    <div className="text-secondary-dark font-bold uppercase tracking-wide text-sm mb-4">Brands Scaled</div>
                                    <p className="text-sm text-gray-600">
                                        From ambitious startups to global enterprises, we&apos;ve delivered consistent, record-breaking growth.
                                    </p>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Scrollable Right Grid */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                                    title: "Strategy-First",
                                    desc: "Every campaign starts with deep research and a custom roadmap tailored to your audience.",
                                    glow: "bg-primary",
                                },
                                {
                                    icon: <LightBulbIcon className="w-6 h-6 text-dark" />,
                                    title: "Data-Driven Decisions",
                                    desc: "Choices backed by analytics, rigorous A/B testing, and hard performance benchmarks.",
                                    glow: "bg-secondary",
                                },
                                {
                                    icon: <ChartBarIcon className="w-6 h-6 text-white" />,
                                    title: "Transparent Reporting",
                                    desc: "Real-time, live dashboards and monthly deep-dives so you never have to guess your ROI.",
                                    glow: "bg-[#10b981]",
                                },
                                {
                                    icon: <UsersIcon className="w-6 h-6 text-white" />,
                                    title: "Dedicated Experts",
                                    desc: "No junior hand-offs. Senior strategists work directly on your account from day one.",
                                    glow: "bg-[#8b5cf6]",
                                }
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.1}>
                                    <div className="group h-full rounded-3xl bg-white border border-gray-100 p-8 hover:bg-gray-50 transition-all duration-300 relative overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1">
                                        <div className={`w-14 h-14 rounded-2xl ${item.glow} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ====== CORPORATE CTA ====== */}
            <section className="relative py-32 overflow-hidden bg-primary">
                {/* Subtle grid pattern background for corporate feel */}
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight mb-8">
                            Ready to accelerate your <span className="italic text-secondary">trajectory?</span>
                        </h2>
                        <p className="text-xl text-primary-light max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Stop wasting budget on disconnected tactics. Let&apos;s map out a holistic growth system that turns clicks into loyal customers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="accent" className="text-lg px-10 py-4 hover:scale-105 transition-all text-dark">
                                Book Your Free Strategy Session
                            </Button>
                        </div>
                        <p className="mt-6 text-sm text-primary-light/80 font-medium">
                            No commitment. Just a 30-minute roadmap to growth.
                        </p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
