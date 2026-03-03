import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import {
    EnvelopeIcon,
    ChartBarIcon,
    CogIcon,
    UserGroupIcon,
    ArrowTrendingUpIcon,
    BoltIcon,
    PencilSquareIcon,
    FunnelIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "Email Marketing",
    description:
        "From strategy to automation, we help you turn email into your highest ROI channel — built around your audience, not generic templates.",
};

const services = [
    {
        icon: <CogIcon className="h-6 w-6" />,
        title: "Strategy & Planning",
        desc: "Goals, funnels, content direction, and KPIs — all mapped before we write a single email.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Audience Segmentation & List Hygiene",
        desc: "Clean, segmented lists that improve deliverability and engagement rates.",
    },
    {
        icon: <EnvelopeIcon className="h-6 w-6" />,
        title: "Welcome & Onboarding Sequences",
        desc: "First impressions matter. We craft sequences that build trust from day one.",
    },
    {
        icon: <FunnelIcon className="h-6 w-6" />,
        title: "Lead Nurturing Flows",
        desc: "Automated flows that move leads through your funnel with relevant, timely content.",
    },
    {
        icon: <PencilSquareIcon className="h-6 w-6" />,
        title: "Copywriting & Visual Layout",
        desc: "On-brand copy and beautiful templates that look perfect on every device.",
    },
    {
        icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
        title: "A/B Testing & Optimisation",
        desc: "Continuous testing of subject lines, content, and send times for peak performance.",
    },
    {
        icon: <ChartBarIcon className="h-6 w-6" />,
        title: "Promotional & Campaign Emails",
        desc: "Data-driven campaigns personalised for each segment of your audience.",
    },
    {
        icon: <BoltIcon className="h-6 w-6" />,
        title: "Abandoned Cart & Re-engagement",
        desc: "Win back lost conversions and re-engage dormant subscribers automatically.",
    },
];

export default function EmailMarketingPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            Email Marketing
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            Email Marketing Designed to Drive{" "}
                            <span className="gradient-text">Engagement & Revenue</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            From strategy to automation, we help you turn email into your
                            highest ROI channel — built around your audience, not generic
                            templates.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Get an Email Marketing Audit</Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* What We Do */}
            <Section variant="white">
                <SectionHeading
                    title="What We Do"
                    subtitle="Email marketing is one of the few channels you truly own."
                />
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <p className="text-gray-500 leading-relaxed">
                        At M&B Strategy, we design email systems that nurture relationships,
                        build trust, and drive consistent revenue over time. We focus on
                        where your audience is in their journey, crafting messages that feel
                        relevant, timely, and valuable — never intrusive. Every campaign is
                        tied to a clear objective, whether onboarding, conversion, retention,
                        or re-engagement.
                    </p>
                </div>
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

            {/* Who It's For */}
            <Section variant="gray">
                <div className="mx-auto max-w-3xl text-center">
                    <SectionHeading title="Who It&apos;s For" />
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            Ideal for brands with an existing email list that isn&apos;t delivering
                            results, or businesses looking to turn email into a long-term
                            revenue channel rather than an afterthought.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* Results */}
            <Section variant="white">
                <div className="mx-auto max-w-3xl text-center">
                    <SectionHeading title="Results You Can Expect" />
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            Higher engagement, increased customer lifetime value, and more
                            consistent revenue from your existing audience.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="navy">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Ready to boost your email revenue?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Get a free audit of your current email performance.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Book a Free Email Strategy Call</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
