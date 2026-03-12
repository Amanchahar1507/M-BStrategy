"use client";

import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
    MegaphoneIcon,
    CameraIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    PresentationChartBarIcon,
    SparklesIcon,
    PencilSquareIcon,
    CheckCircleIcon,
    ArrowTrendingUpIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        icon: <SparklesIcon className="h-6 w-6" />,
        title: "Strategy & Content Planning",
        desc: "Custom content pillars, posting cadence, and platform strategy tailored to your brand goals.",
    },
    {
        icon: <CameraIcon className="h-6 w-6" />,
        title: "Brand-Aligned Creative Design",
        desc: "Scroll-stopping graphics, reels, and carousels that resonate with your audience.",
    },
    {
        icon: <PencilSquareIcon className="h-6 w-6" />,
        title: "Captions & Storytelling",
        desc: "Engaging copy that tells your brand story and drives meaningful interactions.",
    },
    {
        icon: <CalendarDaysIcon className="h-6 w-6" />,
        title: "Content Calendars",
        desc: "Strategic scheduling across platforms, optimised for peak engagement times.",
    },
    {
        icon: <MegaphoneIcon className="h-6 w-6" />,
        title: "Platform Optimisation",
        desc: "Profile setup, bio optimisation, and platform-specific strategies for maximum reach.",
    },
    {
        icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
        title: "Community Management",
        desc: "Active engagement, comment management, and DM handling to build real relationships.",
    },
    {
        icon: <PresentationChartBarIcon className="h-6 w-6" />,
        title: "Analytics & Reporting",
        desc: "Detailed monthly reports with growth metrics, engagement analysis, and recommendations.",
    },
];

const platforms = [
    { name: "Instagram", color: "from-pink-500 to-purple-600" },
    { name: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { name: "Facebook", color: "from-blue-500 to-blue-700" },
    { name: "X (Twitter)", color: "from-gray-700 to-gray-900" },
    { name: "TikTok", color: "from-pink-600 to-cyan-500" },
];

const results = [
    "Stronger brand recall & awareness",
    "Higher quality engagement & conversations",
    "Consistent, professional online presence",
    "Increased follower growth & reach",
    "Content that converts followers to customers",
    "Community-driven brand advocacy",
];

export default function SocialMediaPage() {
    return (
        <div className="overflow-hidden">
            {/* ====== CORPORATE HERO ====== */}
            <section className="relative min-h-[75vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/social_hero_bg.png"
                        alt="Social Media Management Background"
                        fill
                        className="object-cover opacity-10 scale-105 saturate-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
                </div>

                {/* Ambient glowing orbs — corporate theme */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-20">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79, 87, 223, 0.4) 0%, transparent 70%)" }} />
                    <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(253, 214, 59, 0.3) 0%, transparent 70%)" }} />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center sm:text-left">
                    <div className="max-w-3xl">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
                                <HeartIcon className="h-4 w-4" />
                                Social Media Management
                            </span>
                        </FadeIn>

                        <TextGenerateEffect
                            words="Social Media That Builds Trust, Not Just Likes"
                            className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl leading-[1.1]"
                        />

                        <FadeIn delay={0.4}>
                            <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
                                We manage your social presence with clarity, consistency, and creativity — aligned with your brand strategy and designed to convert followers into customers.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button href="/contact" variant="primary" className="shadow-[0_4px_14px_0_rgba(79,87,223,0.39)]">
                                    Get a Free Social Audit
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
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">Built for <span className="text-secondary">Engagement & Growth</span></h2>
                    </FadeIn>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 250, suffix: "%", label: "Engagement Growth" },
                            { value: 180, suffix: "%", label: "Follower Increase" },
                            { value: 45, suffix: "%", label: "Higher Conversion" },
                            { value: 100, suffix: "+", label: "Brands Managed" },
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

            {/* ====== WHAT WE HANDLE (Image + Text) ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 30%, #fdf2f8 60%, #f8fafc 100%)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] -mt-32 -mr-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] -mb-32 -ml-32" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/5 border border-purple-500/10">
                                    <SparklesIcon className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Our Approach</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl leading-tight">
                                    Social Media Done <span className="text-purple-600">Strategically</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Social media is often the first interaction someone has with your
                                    brand. We ensure that interaction is intentional, professional,
                                    and aligned with your long-term positioning.
                                </p>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    We don&apos;t just post — we plan, create, engage, and optimise.
                                    Every piece of content serves a purpose in your broader
                                    marketing strategy.
                                </p>
                                <div className="relative pl-6 border-l-4 border-purple-500 my-8 py-4 bg-white/80 rounded-r-2xl pr-6 shadow-sm">
                                    <p className="text-xl text-dark leading-relaxed font-bold italic">
                                        &ldquo;Your brand is what people say about you when you&apos;re not in the room. Social media shapes that conversation.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="relative h-full min-h-[450px] lg:min-h-[600px]">
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl group ring-1 ring-black/5">
                                <Image
                                    src="/images/social_content_3d.png"
                                    alt="Social Media Content Creation"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                                    <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                                        Scroll-stopping content that builds community and drives real business results.
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
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Our Social Media <span className="text-primary">Services</span></h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                            Everything you need to build and grow your social presence, managed end-to-end.
                        </p>
                    </FadeIn>
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
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== PLATFORMS WE WORK WITH ====== */}
            <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 50%, #fdf2f8 100%)' }}>
                <div className="absolute top-0 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] -mt-20" />
                <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-[80px] -mb-20" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/5 border border-purple-500/10 mb-6">
                            <MegaphoneIcon className="h-4 w-4 text-purple-600" />
                            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Platforms</span>
                        </div>
                        <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">Platforms We <span className="text-purple-600">Work With</span></h2>
                    </FadeIn>

                    <div className="flex flex-wrap justify-center gap-6">
                        {platforms.map((platform, i) => (
                            <FadeIn key={platform.name} delay={i * 0.1}>
                                <div className={`group relative rounded-2xl bg-gradient-to-br ${platform.color} p-[2px] shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}>
                                    <div className="flex items-center gap-3 rounded-[14px] bg-white px-8 py-5">
                                        <span className={`text-lg font-bold bg-gradient-to-br ${platform.color} bg-clip-text text-transparent`}>{platform.name}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====== RESULTS + WHO IT'S FOR ====== */}
            <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #faf5ff 50%, #fdf2f8 100%)' }}>
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] -mt-20" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-[80px] -mb-20" />
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image src="/images/social_content_3d.png" alt="Background" fill className="object-cover opacity-[0.03] scale-150 rotate-12 grayscale" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Results */}
                        <FadeIn>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-purple-500/5 border border-purple-500/10">
                                    <ArrowTrendingUpIcon className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">Results</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
                                    What You Can <span className="text-purple-600">Expect</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Stronger brand recall, improved engagement quality, and a consistent online presence that supports credibility and growth.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {results.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-purple-500/10 shadow-sm hover:shadow-md hover:border-purple-500/20 transition-all">
                                            <CheckCircleIcon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                                            <span className="text-sm font-medium text-dark">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Who It's For */}
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-pink-500/5 border border-pink-500/10">
                                    <HeartIcon className="h-4 w-4 text-pink-600" />
                                    <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Who It&apos;s For</span>
                                </div>
                                <h2 className="text-3xl font-bold text-dark sm:text-4xl leading-tight">
                                    Is Social Media Management <span className="text-pink-600">Right for You?</span>
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed">
                                    Perfect for brands that know they need to show up consistently on social media but don&apos;t have the time, team, or strategy to do it properly.
                                </p>
                                <div className="space-y-3 mt-6">
                                    {["Founders too busy to manage their socials", "Brands with inconsistent posting & visuals", "Businesses wanting professional content creation", "Companies ready to turn followers into clients"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pink-500/10 shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all">
                                            <CheckCircleIcon className="h-5 w-5 text-pink-500 flex-shrink-0" />
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
                            Ready to level up your <span className="italic text-primary">social presence?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Book a free brand audit and let&apos;s discuss how we can transform your social media into a growth engine for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Button href="/contact" variant="primary" className="text-lg px-10 py-4 shadow-[0_4px_14px_0_rgba(79,87,223,0.39)] hover:shadow-[0_6px_20px_rgba(79,87,223,0.23)] hover:-translate-y-1 transition-all">
                                Book a Free Social Media Consultation
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
