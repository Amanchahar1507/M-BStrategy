"use client";

import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import SpotlightCard from "@/components/SpotlightCard";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import BackgroundBeams from "@/components/BackgroundBeams";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CogIcon,
  CheckBadgeIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        <BackgroundBeams />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-electric-light backdrop-blur-sm border border-white/10 mb-8">
                <span className="h-2 w-2 rounded-full bg-electric animate-pulse" />
                Strategy-Led Growth Agency
              </span>
            </FadeIn>

            <TextGenerateEffect
              words="Marketing & Branding Strategies That Drive Real Growth"
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            />

            <FadeIn delay={0.8}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                We help brands scale through strategic Email Marketing, SEO
                optimisation, and high-performing Social Media management —
                built to convert, not just look good.
              </p>
            </FadeIn>

            {/* Trust Signals */}
            <FadeIn delay={0.9}>
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Data-driven strategies",
                  "Conversion-focused execution",
                  "Transparent reporting",
                  "Long-term growth mindset",
                ].map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400"
                  >
                    <CheckBadgeIcon className="h-4 w-4 text-electric" />
                    {signal}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Get a Free Strategy Call
                </Button>
                <Button href="/services" variant="outline">
                  View Our Services
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNAPSHOT ===== */}
      <Section variant="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              title="Why Brands Choose M&B Strategy"
              centered={false}
            />
            <p className="text-gray-500 leading-relaxed">
              At M&B Strategy, we believe marketing should be intentional,
              measurable, and scalable. Every strategy we build is rooted in
              audience insights, brand positioning, and performance data — no
              guesswork, no generic tactics.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We partner with brands that value clarity, consistency, and
              compounding growth — not short-term hacks.
            </p>
            <div className="mt-8">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <StatsCounter value={150} suffix="+" label="Clients Served" />
              <StatsCounter value={98} suffix="%" label="Client Retention" />
              <StatsCounter value={3} suffix="x" label="Avg. ROI Increase" />
              <StatsCounter value={5} suffix="M+" label="Emails Sent Monthly" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <Section variant="gray">
        <SectionHeading
          title="Our Core Growth Services"
          subtitle="We focus on three essential growth pillars that every modern brand needs to scale sustainably."
        />
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

      {/* ===== 4-STEP PROCESS ===== */}
      <Section variant="navy">
        <SectionHeading
          title="Our Proven 4-Step Process"
          subtitle="Strategy first. Execution second. Results always."
          light
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <LightBulbIcon className="h-6 w-6" />,
              step: "01",
              title: "Discover",
              desc: "Deep dive into your brand, audience, competitors, and goals.",
            },
            {
              icon: <CogIcon className="h-6 w-6" />,
              step: "02",
              title: "Strategise",
              desc: "Build a tailored growth roadmap aligned with your objectives.",
            },
            {
              icon: <RocketLaunchIcon className="h-6 w-6" />,
              step: "03",
              title: "Execute",
              desc: "Launch campaigns with precision and consistency.",
            },
            {
              icon: <ChartBarIcon className="h-6 w-6" />,
              step: "04",
              title: "Optimise",
              desc: "Track, test, refine, and scale what works.",
            },
          ].map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-electric">
                  {step.icon}
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-electric">
                  Step {step.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ===== CTA BANNER ===== */}
      <Section variant="white" className="!py-0">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-16 text-center sm:px-16 lg:py-20">
          <BackgroundBeams />
          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Build a Marketing Strategy That Actually Works?
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Let&apos;s turn your marketing into a predictable growth engine.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Book Your Free Strategy Call
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
