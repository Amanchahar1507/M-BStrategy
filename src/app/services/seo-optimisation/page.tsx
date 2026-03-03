import { Metadata } from "next";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import {
    MagnifyingGlassIcon,
    DocumentTextIcon,
    LinkIcon,
    ChartBarIcon,
    CommandLineIcon,
    GlobeAltIcon,
    ArrowPathIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
    title: "SEO Optimisation",
    description:
        "We help your ideal customers find you organically through search-led strategies that compound over time.",
};

const services = [
    {
        icon: <CommandLineIcon className="h-6 w-6" />,
        title: "SEO Audits & Technical Analysis",
        desc: "Comprehensive crawl of your site to identify technical barriers to ranking.",
    },
    {
        icon: <MagnifyingGlassIcon className="h-6 w-6" />,
        title: "Keyword Research & Intent Mapping",
        desc: "In-depth analysis to find high-intent keywords your competitors are missing.",
    },
    {
        icon: <DocumentTextIcon className="h-6 w-6" />,
        title: "On-Page Optimisation",
        desc: "Title tags, meta descriptions, headings, and content structured for search success.",
    },
    {
        icon: <GlobeAltIcon className="h-6 w-6" />,
        title: "Content Optimisation & SEO Copywriting",
        desc: "Keyword-driven content that captures search demand and builds topical authority.",
    },
    {
        icon: <LinkIcon className="h-6 w-6" />,
        title: "Internal Linking Strategy",
        desc: "Smart internal linking architecture that distributes authority and improves crawlability.",
    },
    {
        icon: <ArrowPathIcon className="h-6 w-6" />,
        title: "Site Structure & UX Alignment",
        desc: "Ensuring your site architecture supports both search engines and user experience.",
    },
    {
        icon: <ChartBarIcon className="h-6 w-6" />,
        title: "Performance Tracking & Reporting",
        desc: "Weekly rank tracking, traffic analysis, and conversion reporting with actionable insights.",
    },
];

export default function SEOPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-navy pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <FadeIn>
                        <span className="text-sm font-semibold uppercase tracking-wider text-electric">
                            SEO Optimisation
                        </span>
                        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                            SEO Optimisation That Puts Your{" "}
                            <span className="gradient-text">Brand on Page One</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
                            We help your ideal customers find you organically through
                            search-led strategies that compound over time.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Get a Free SEO Audit</Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy */}
            <Section variant="white">
                <SectionHeading
                    title="Our SEO Philosophy"
                />
                <div className="mx-auto max-w-3xl text-center mb-12">
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            SEO isn&apos;t about chasing algorithms — it&apos;s about understanding
                            search intent and aligning your website with what your audience is
                            actively searching for. Our approach focuses on sustainable
                            optimisation, ensuring rankings, traffic, and conversions grow
                            together.
                        </p>
                    </FadeIn>
                </div>

                <SectionHeading
                    title="SEO Services Include"
                    subtitle="Everything you need to dominate search, managed end-to-end."
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

            {/* Results */}
            <Section variant="gray">
                <div className="mx-auto max-w-3xl text-center">
                    <SectionHeading title="Results You Can Expect" />
                    <FadeIn>
                        <p className="text-gray-500 leading-relaxed">
                            Improved visibility, higher-quality inbound traffic, stronger
                            engagement, and increased lead generation without relying solely
                            on paid ads.
                        </p>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="navy">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Ready to rank higher?
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Get a free technical audit and discover your SEO opportunities.
                        </p>
                        <div className="mt-8">
                            <Button href="/contact">Schedule Your SEO Strategy Call</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </>
    );
}
