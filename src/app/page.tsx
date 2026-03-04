"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import SpotlightCard from "@/components/SpotlightCard";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import BackgroundBeams from "@/components/BackgroundBeams";
import MovingBorderCard from "@/components/MovingBorderCard";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AnimatedGridPattern from "@/components/AnimatedGridPattern";
import FloatingImage from "@/components/FloatingImage";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CogIcon,
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ===== HERO — IMMERSIVE FULL-SCREEN ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-navy overflow-hidden"
      >
        {/* Parallax hero background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroImageY }}>
          <Image
            src="/images/hero-growth.png"
            alt="Digital growth visualization"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />
        </motion.div>

        <BackgroundBeams className="z-[1]" />

        {/* Animated grid overlay */}
        <AnimatedGridPattern className="z-[2]" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <FadeIn>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-electric-light backdrop-blur-sm border border-white/10 mb-8">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-electric"
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Strategy-Led Growth Agency
                </span>
              </FadeIn>

              <TextGenerateEffect
                words="Marketing & Branding Strategies That Drive Real Growth"
                className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              />

              <FadeIn delay={0.8}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                  We help brands scale through strategic Email Marketing, SEO
                  optimisation, and high-performing Social Media management —
                  built to convert, not just look good.
                </p>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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

            {/* Floating dashboard images */}
            <FadeIn delay={0.5} className="hidden lg:block">
              <div className="relative">
                <FloatingImage
                  src="/images/dashboard-analytics.png"
                  alt="Marketing analytics dashboard"
                  width={600}
                  height={400}
                  className="relative z-10"
                />
                {/* Decorative floating card behind */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-0 rounded-2xl bg-electric/20 backdrop-blur-sm border border-electric/20 px-6 py-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-electric/30 flex items-center justify-center">
                      <ArrowUp className="h-5 w-5 text-electric" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Conversion Rate</div>
                      <div className="text-lg font-bold text-white">+127%</div>
                    </div>
                  </div>
                </motion.div>
                {/* Another metric card */}
                <motion.div
                  className="absolute -top-4 -right-4 z-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-electric" />
                    <div>
                      <div className="text-xs text-gray-400">Revenue Growth</div>
                      <div className="text-base font-bold text-white">3x ROI</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-electric"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== TRUST MARQUEE ===== */}
      <div className="bg-soft-gray py-6 border-y border-gray-200">
        <InfiniteMarquee speed={25}>
          {[
            "✦ Strategy-First Approach",
            "✦ 150+ Brands Served",
            "✦ 98% Client Retention",
            "✦ Email Marketing",
            "✦ SEO Optimisation",
            "✦ Social Media Management",
            "✦ Data-Driven Results",
            "✦ Transparent Reporting",
          ].map((text) => (
            <span
              key={text}
              className="flex-shrink-0 text-sm font-medium text-gray-500 whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </InfiniteMarquee>
      </div>

      {/* ===== ABOUT SNAPSHOT WITH FLOATING IMAGE ===== */}
      <Section variant="white">
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <FloatingImage
                src="/images/creative-workspace.png"
                alt="Creative workspace at M&B Strategy"
                width={600}
                height={400}
              />
              {/* Overlapping stat cards */}
              <motion.div
                className="absolute -bottom-6 -left-4 z-20 rounded-2xl bg-white shadow-xl border border-gray-100 p-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-electric/10 flex items-center justify-center">
                    <StarIcon className="h-6 w-6 text-electric" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">150+</div>
                    <div className="text-xs text-gray-500">Brands Trust Us</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 z-20 rounded-2xl bg-white shadow-xl border border-gray-100 p-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <ChartBarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">98%</div>
                    <div className="text-xs text-gray-500">Retention Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ===== SERVICES WITH IMAGES + MOVING BORDER ===== */}
      <section className="relative py-20 lg:py-28 bg-soft-gray overflow-hidden">
        <AnimatedGridPattern />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Core Growth Services"
            subtitle="We focus on three essential growth pillars that every modern brand needs to scale sustainably."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <EnvelopeIcon className="h-6 w-6" />,
                title: "Email Marketing That Converts",
                desc: "Build relationships, nurture leads, and drive repeat revenue with strategic email campaigns.",
                href: "/services/email-marketing",
                linkText: "Explore Email Marketing",
                image: "/images/service-email.png",
              },
              {
                icon: <MagnifyingGlassIcon className="h-6 w-6" />,
                title: "SEO Built for Long-Term Growth",
                desc: "Rank higher, attract qualified traffic, and convert organic visitors into customers.",
                href: "/services/seo-optimisation",
                linkText: "Explore SEO Services",
                image: "/images/service-seo.png",
              },
              {
                icon: <MegaphoneIcon className="h-6 w-6" />,
                title: "Social Media That Builds Brands",
                desc: "Scroll-stopping creatives and consistent management designed to grow awareness, engagement, and trust.",
                href: "/services/social-media",
                linkText: "Explore Social Media Services",
                image: "/images/service-social.png",
              },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <MovingBorderCard>
                  <motion.a
                    href={service.href}
                    className="group block"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Service Image */}
                    <div className="relative h-52 overflow-hidden rounded-t-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric text-white shadow-lg shadow-electric/30">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-navy">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500 mb-4">
                        {service.desc}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-electric group-hover:gap-2 transition-all">
                        {service.linkText}
                        <svg
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </motion.a>
                </MovingBorderCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS — PARALLAX IMAGE BANNER ===== */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/team-meeting.png"
            alt="M&B Strategy team collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm" />
        </motion.div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="mb-4 h-1 w-12 rounded-full bg-electric mx-auto" />
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Results That Speak
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                We don&apos;t just promise growth — we deliver it with data.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatsCounter value={150} suffix="+" label="Clients Served" light />
            <StatsCounter value={98} suffix="%" label="Client Retention" light />
            <StatsCounter value={3} suffix="x" label="Avg. ROI Increase" light />
            <StatsCounter value={5} suffix="M+" label="Emails Sent Monthly" light />
          </div>
        </div>
      </section>

      {/* ===== 4-STEP PROCESS — TIMELINE STYLE ===== */}
      <Section variant="white">
        <SectionHeading
          title="Our Proven 4-Step Process"
          subtitle="Strategy first. Execution second. Results always."
        />
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric/20 to-transparent hidden lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <LightBulbIcon className="h-7 w-7" />,
                step: "01",
                title: "Discover",
                desc: "Deep dive into your brand, audience, competitors, and goals.",
              },
              {
                icon: <CogIcon className="h-7 w-7" />,
                step: "02",
                title: "Strategise",
                desc: "Build a tailored growth roadmap aligned with your objectives.",
              },
              {
                icon: <RocketLaunchIcon className="h-7 w-7" />,
                step: "03",
                title: "Execute",
                desc: "Launch campaigns with precision and consistency.",
              },
              {
                icon: <ChartBarIcon className="h-7 w-7" />,
                step: "04",
                title: "Optimise",
                desc: "Track, test, refine, and scale what works.",
              },
            ].map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <motion.div
                  className="relative rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-sm overflow-hidden group"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background step number */}
                  <span className="absolute -top-6 -right-4 text-[140px] font-black text-electric/[0.04] leading-none select-none group-hover:text-electric/[0.08] transition-colors duration-500">
                    {step.step}
                  </span>

                  <div className="relative z-10">
                    {/* Dot on timeline */}
                    <div className="mx-auto mb-6 relative">
                      <motion.div
                        className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-electric to-electric-dark flex items-center justify-center text-white shadow-lg shadow-electric/25"
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-electric">
                      Step {step.step}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA BANNER — IMMERSIVE ===== */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-marketing.png"
            alt="Marketing workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <BackgroundBeams />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Ready to Build a Marketing Strategy That Actually Works?
              </h2>
              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                Let&apos;s turn your marketing into a predictable growth engine.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Book Your Free Strategy Call
                </Button>
                <Button href="/pricing" variant="outline">
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* Small helper icon component */
function ArrowUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}
