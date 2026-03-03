import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import {
    EnvelopeIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore our core services: Email Marketing, SEO Optimisation, and Social Media management — all designed for sustainable growth.",
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            Our Services
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Our Core{" "}
                            <span className="gradient-text">Growth Services</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            We focus on three essential growth pillars that every modern brand
                            needs to scale sustainably.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Service Cards */}
            <Section variant="white">
                <p className="mx-auto max-w-3xl text-center text-gray-500 leading-relaxed mb-12">
                    All services are delivered using a strategy-first approach. We don&apos;t
                    jump straight into execution — we first understand your brand,
                    audience behaviour, competitors, and growth objectives. This ensures
                    every action is intentional, aligned, and measurable.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    <ServiceCard
                        icon={<EnvelopeIcon className="h-6 w-6" />}
                        title="Email Marketing That Converts"
                        description="Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns."
                        href="/services/email-marketing"
                        linkText="Explore Email Marketing"
                        delay={0}
                    />
                    <ServiceCard
                        icon={<MagnifyingGlassIcon className="h-6 w-6" />}
                        title="SEO Built for Long-Term Growth"
                        description="Rank higher, attract qualified traffic, and convert organic visitors into customers."
                        href="/services/seo-optimisation"
                        linkText="Explore SEO Services"
                        delay={0.15}
                    />
                    <ServiceCard
                        icon={<MegaphoneIcon className="h-6 w-6" />}
                        title="Social Media That Builds Brands"
                        description="Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust."
                        href="/services/social-media"
                        linkText="Explore Social Media Services"
                        delay={0.3}
                    />
                </div>
            </Section>

            {/* Why M&B */}
            <Section variant="gray">
                <SectionHeading
                    title="Why Work With Us?"
                    subtitle="Strategy first. Execution second. Results always."
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Strategy-First",
                            desc: "Every campaign starts with deep research and a custom strategy tailored to your brand, audience, and goals.",
                        },
                        {
                            title: "Data-Driven",
                            desc: "Decisions backed by analytics, A/B testing, and performance benchmarks — not hunches.",
                        },
                        {
                            title: "Transparent Reporting",
                            desc: "Real-time dashboards and monthly deep-dives so you always know your ROI.",
                        },
                        {
                            title: "Dedicated Team",
                            desc: "No junior hand-offs. Senior strategists work directly on your account.",
                        },
                        {
                            title: "Proven Results",
                            desc: "150+ brands trust us to deliver consistent growth across all channels.",
                        },
                        {
                            title: "Flexible Scaling",
                            desc: "Start small, scale fast. Our packages grow with your business needs.",
                        },
                    ].map((item, i) => (
                        <FadeIn key={item.title} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section variant="navy">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Let&apos;s build your growth engine
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Book a free consultation to discuss which services are right for
                            you.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" variant="primary">
                                Book a Free Strategy Call
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
