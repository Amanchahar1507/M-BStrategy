import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import {
    MegaphoneIcon,
    CameraIcon,
    CalendarDaysIcon,
    ChatBubbleLeftRightIcon,
    PresentationChartBarIcon,
    SparklesIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Social Media Creatives & Management",
    description:
        "We manage your social presence with clarity, consistency, and creativity — aligned with your brand strategy.",
};

const services = [
    {
        icon: <SparklesIcon className="h-6 w-6" />,
        title: "Strategy & Content Planning",
        desc: "Custom content pillars, posting cadence, and platform strategy tailored to your brand goals.",
    },
    {
        icon: <CameraIcon className="h-6 w-6" />,
        title: "Brand-Aligned Creative Design",
        desc: "Scroll-stopping graphics, reels, and carousels that align with your brand and resonate with your audience.",
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
        desc: "Detailed monthly reports with growth metrics, engagement analysis, and strategic recommendations.",
    },
];

const platforms = [
    "Instagram",
    "LinkedIn",
    "Facebook",
    "X (Twitter)",
    "TikTok (strategy-led only)",
];

export default function SocialMediaPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            Social Media Creatives & Management
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Social Media That Builds{" "}
                            <span className="gradient-text">Trust, Not Just Likes</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            We manage your social presence with clarity, consistency, and
                            creativity — aligned with your brand strategy.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Get a Social Media Strategy Review</Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* What We Handle */}
            <Section variant="white">
                <SectionHeading
                    title="What We Handle"
                />
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            Social media is often the first interaction someone has with your
                            brand. We ensure that interaction is intentional, professional,
                            and aligned with your long-term positioning.
                        </p>
                    </FadeIn>
                </div>

                <SectionHeading
                    title="Social Media Services Include"
                    subtitle="Everything you need to build and grow your social presence."
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((f, i) => (
                        <FadeIn key={f.title} delay={i * 0.08}>
                            <SpotlightCard>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 text-electric">
                                    {f.icon}
                                </div>
                                <h3 className="mb-2 text-base font-bold text-navy">{f.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">
                                    {f.desc}
                                </p>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Platforms */}
            <Section variant="gray">
                <SectionHeading
                    title="Platforms We Work With"
                />
                <FadeIn>
                    <div className="flex flex-wrap justify-center gap-4">
                        {platforms.map((platform) => (
                            <span
                                key={platform}
                                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-navy shadow-sm"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </FadeIn>
            </Section>

            {/* Results */}
            <Section variant="white">
                <div className="mx-auto max-w-3xl text-center">
                    <SectionHeading title="Results You Can Expect" />
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            Stronger brand recall, improved engagement quality, and a
                            consistent online presence that supports credibility and growth.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="navy">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Ready to level up your social presence?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Book a free brand audit and let&apos;s discuss your social strategy.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Book a Free Social Media Consultation</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
