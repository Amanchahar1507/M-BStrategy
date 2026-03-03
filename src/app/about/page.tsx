import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import {
    EyeIcon,
    HeartIcon,
    ShieldCheckIcon,
    SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "M&B Strategy exists to help brands cut through the noise with clarity and purpose. Strategic marketing built for sustainable growth.",
};

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
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            About M&B Strategy
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Strategic Marketing Built for{" "}
                            <span className="gradient-text">Sustainable Growth</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            M&B Strategy exists to help brands cut through the noise with
                            clarity and purpose.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Mission */}
            <Section variant="white">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <FadeIn>
                        <SectionHeading
                            title="Our Story"
                            centered={false}
                        />
                        <p className="text-gray-500 leading-relaxed">
                            We don&apos;t believe in one-size-fits-all marketing. Every brand
                            deserves a strategy that reflects its vision, audience, and stage
                            of growth.
                        </p>
                        <p className="mt-4 text-gray-500 leading-relaxed">
                            Our approach blends creativity with performance, ensuring every
                            campaign has a clear objective and measurable impact.
                        </p>
                        <p className="mt-4 text-gray-500 leading-relaxed font-medium italic">
                            &ldquo;We don&apos;t just market brands — we build systems that grow
                            them.&rdquo;
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Work With Us</Button>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-2 gap-6">
                            <StatsCounter value={150} suffix="+" label="Clients Served" />
                            <StatsCounter value={98} suffix="%" label="Client Retention" />
                            <StatsCounter value={3} suffix="x" label="Avg. ROI Increase" />
                            <StatsCounter value={4} suffix="+" label="Years Experience" />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Values */}
            <Section variant="gray">
                <SectionHeading
                    title="Our Values"
                    subtitle="The principles that guide everything we do."
                />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((v, i) => (
                        <FadeIn key={v.title} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                    {v.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Ideal Clients */}
            <Section variant="white">
                <SectionHeading
                    title="Who We Work With"
                    subtitle="We partner with ambitious brands that value clarity, consistency, and compounding growth."
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Start-ups and scale-ups",
                        "SMEs and growing e-commerce brands",
                        "Service-based businesses",
                        "Personal brands and founders",
                    ].map((client, i) => (
                        <FadeIn key={client} delay={i * 0.1}>
                            <div className="rounded-2xl border border-gray-200 bg-soft-gray p-6 text-center shadow-sm hover:shadow-lg transition-shadow">
                                <p className="text-sm font-semibold text-navy">{client}</p>
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
                            Ready to partner with a team that delivers?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Let&apos;s discuss how M&B Strategy can accelerate your growth.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Get in Touch</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
