"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import StatsCounter from "@/components/StatsCounter";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import MovingBorderCard from "@/components/MovingBorderCard";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import AnimatedGridPattern from "@/components/AnimatedGridPattern";
import FloatingImage from "@/components/FloatingImage";
import BlobImage from "@/components/BlobImage";
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
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.15]);

  return (
    <>
      {/* ===== HERO — CLEAN CORPORATE AESTHETIC ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-white"
      >
        {/* Subtle grid pattern background for corporate feel */}
        < div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        {/* Soft gradient blobs — clean & brand aligned */}
        < div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden mix-blend-multiply opacity-40" >
          <div
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full animate-float-slow"
            style={{
              background: "radial-gradient(circle, rgba(79, 87, 223, 0.15) 0%, rgba(79, 87, 223, 0) 70%)",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full animate-float-medium"
            style={{
              background: "radial-gradient(circle, rgba(253, 214, 59, 0.15) 0%, rgba(253, 214, 59, 0) 70%)",
              animationDelay: "2s",
            }}
          />
        </div >

        {/* Hero content */}
        < motion.div
          style={{ opacity: heroOpacity }
          }
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 mt-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <FadeIn>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/20 mb-8"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 87, 223, 0.15)" }}
                >
                  <motion.span
                    className="h-2 w-2 rounded-full bg-secondary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Strategy-Led Growth Agency
                </motion.span>
              </FadeIn>

              <TextGenerateEffect
                words="Marketing & Branding Strategies That Drive Real Growth"
                className="text-4xl font-extrabold leading-tight text-dark sm:text-5xl tracking-tight"
              />

              <FadeIn delay={0.8}>
                <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-700">
                  We help brands scale through strategic Email Marketing, SEO
                  optimisation, and high-performing Social Media management —
                  built to convert, not just look good.
                </p>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    "Data-driven strategies",
                    "Conversion-focused execution",
                    "Transparent reporting",
                    "Long-term growth mindset",
                  ].map((signal) => (
                    <span
                      key={signal}
                      className="inline-flex items-center gap-2 text-sm font-medium text-dark"
                    >
                      <CheckBadgeIcon className="h-5 w-5 text-secondary" />
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

            {/* Clean dashboard presentation */}
            <FadeIn delay={0.5} className="hidden lg:block relative">
              <div className="relative">
                {/* Main background image to replace dark floating blobs */}
                <motion.div style={{ y: heroImageY }}>
                  <BlobImage
                    src="/images/hero_corporate.png"
                    alt="M&B Strategy corporate meeting"
                    delay={0.6}
                  />
                </motion.div>

                {/* Floating UI Element overlays */}
                <motion.div
                  className="absolute -bottom-10 -left-10 z-20 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100 p-2 shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/dashboard_corporate.png"
                    alt="Analytics Dashboard"
                    width={250}
                    height={180}
                    className="rounded-xl shadow-sm border border-gray-50"
                  />
                </motion.div>

                {/* Clean stats floating card */}
                <motion.div
                  className="absolute -top-6 -right-6 z-20 rounded-2xl bg-white shadow-xl border border-gray-100 px-6 py-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <ChartBarIcon className="h-6 w-6 text-secondary-dark" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</div>
                      <div className="text-xl font-bold text-dark">+300% ROI</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </motion.div >
      </section >

      {/* ===== TRUST MARQUEE ===== */}
      < div className="bg-primary py-4 border-y border-primary-light" >
        <InfiniteMarquee speed={20}>
          {[
            { icon: "✦", text: "Strategy-First Approach" },
            { icon: "◆", text: "150+ Brands Served" },
            { icon: "✦", text: "98% Client Retention" },
            { icon: "◆", text: "Email Marketing" },
            { icon: "✦", text: "SEO Optimisation" },
            { icon: "◆", text: "Social Media Management" },
            { icon: "✦", text: "Data-Driven Results" },
            { icon: "◆", text: "Transparent Reporting" },
          ].map((item) => (
            <span
              key={item.text}
              className="flex-shrink-0 text-sm font-bold text-white whitespace-nowrap tracking-wider uppercase"
            >
              <span className="text-secondary mr-2">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </InfiniteMarquee>
      </div >

      {/* ===== ABOUT SNAPSHOT ===== */}
      < Section variant="white" >
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
            <div className="mt-8">
              <Button href="/about">Learn More About Us</Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative group">
              <BlobImage
                src="/images/creative-workspace.png"
                alt="Creative workspace at M&B Strategy"
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
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <StarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark">150+</div>
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
                    <div className="text-2xl font-bold text-dark">98%</div>
                    <div className="text-xs text-gray-500">Retention Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Section >

      {/* ===== SERVICES WITH IMAGES ===== */}
      < section className="relative py-20 lg:py-28 overflow-hidden bg-soft-gray" >
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
                    <div className="relative h-52 overflow-hidden rounded-t-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold text-dark">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500 mb-4">
                        {service.desc}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
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
      </section >

      {/* ===== STATS — CLEAN PRIMARY BLUE BANNER ===== */}
      < section className="relative py-24 bg-primary overflow-hidden" >
        {/* Subtle grid pattern background for corporate feel */}
        < div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <motion.div
                className="mb-4 h-1 w-16 rounded-full bg-secondary mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Results That Speak
              </h2>
              <p className="mt-4 text-lg text-primary-light max-w-xl mx-auto">
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
      </section >

      {/* ===== 4-STEP PROCESS (IMPRESSION DIGITAL STYLE Edge-to-Edge Cards) ===== */}
      < section className="relative w-full overflow-hidden py-24 bg-white" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
            Our Proven 4-Step Process
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Strategy first. Execution second. Results always.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[600px] w-full border-y border-gray-100">
          {[
            {
              step: "01",
              title: "Discover & Audit",
              desc: "Deep dive into your brand, audience, competitors, and goals to find growth opportunities.",
              color: "bg-primary text-white", // Brand Primary
              image: "/images/process-discover.png",
              category: "Analytics",
            },
            {
              step: "02",
              title: "Strategic Roadmap",
              desc: "Build a tailored growth roadmap aligned with your business objectives and revenue targets.",
              color: "bg-secondary text-dark", // Brand Secondary
              image: "/images/process-strategise.png",
              category: "Strategy",
            },
            {
              step: "03",
              title: "Execute & Launch",
              desc: "Launch high-converting campaigns across Email, SEO, and Social channels with precision.",
              color: "bg-gray-100 text-dark", // Light Gray
              image: "/images/process-execute.png",
              category: "Execution",
            },
            {
              step: "04",
              title: "Measure & Optimise",
              desc: "Track ROI, test new angles, refine strategies, and scale what works for compounding growth.",
              color: "bg-dark text-white", // Dark Charcoal
              image: "/images/process-optimise.png",
              category: "Growth",
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className={`relative flex flex-col justify-between p-8 xl:p-12 overflow-hidden group ${step.color}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Background Product Image Mockup behind text but pinned to top or middle */}
              <div className="absolute inset-x-0 -top-8 h-64 overflow-hidden opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-bottom mask-image-gradient"
                />
                {/* Gradient overlay to fade into card color */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[${step.color.includes("primary") ? "#4F57DF" :
                    step.color.includes("secondary") ? "#FDD63B" :
                      step.color.includes("gray-100") ? "#f3f4f6" : "#2B2D42"
                    }] opacity-90`}
                />
              </div>

              {/* Ensure text sits above image */}
              <div className="relative mt-48 lg:mt-56 z-10 flex flex-col h-full justify-end">
                <div>
                  <div className="mb-4 text-sm font-bold tracking-widest uppercase opacity-70">
                    Step {step.step}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold leading-tight">
                    {step.title}
                  </h3>
                  <div className="mb-8 grid grid-cols-2 gap-4 text-sm opacity-80">
                    <div>
                      <div className="uppercase tracking-wider text-[10px] font-bold opacity-70 mb-1">Focus</div>
                      <div className="font-medium font-serif italic text-base">{step.category}</div>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed opacity-90">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Decorative hover arrow */}
              <div className="absolute top-1/2 -right-12 mt-32 w-8 transform -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:right-6 group-hover:opacity-100 hidden md:block">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ===== CTA & CONTACT FORM — CLEAN CORPORATE ===== */}
      < section className="relative py-28 lg:py-40 overflow-hidden bg-soft-gray border-t border-gray-200" >
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CTA Text */}
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block py-1.5 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary-dark text-sm font-semibold mb-6 tracking-wide uppercase">
                  Let's Work Together
                </span>
                <h2 className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl leading-tight mb-6">
                  Ready to Build a{" "}
                  <span className="text-primary block mt-2">
                    Growth Engine?
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
                  Stop relying on guesswork. Partner with a strategy-led agency
                  to build a predictable, scalable marketing system that drives
                  real ROI.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <EnvelopeIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us Directly</p>
                      <p className="font-medium text-dark">hello@marketingnbrandingstrategy.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <ClockIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="font-medium text-dark">Within 24 Business Hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            {/* Clean Corporate Form */}
            <FadeIn delay={0.2}>
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Form Content */}
                <div className="relative p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-dark mb-8">
                    Book Your Free Strategy Call
                  </h3>

                  <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Work Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">How can we help?</label>
                      <select
                        defaultValue=""
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                      >
                        <option value="" disabled className="text-gray-400">Select a service...</option>
                        <option value="email">Email Marketing</option>
                        <option value="seo">SEO Optimisation</option>
                        <option value="social">Social Media Management</option>
                        <option value="multiple">Full Growth Strategy (Multiple)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</label>
                      <textarea
                        rows={3}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell us about your brand and growth goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(79,87,223,0.39)] hover:shadow-[0_6px_20px_rgba(79,87,223,0.23)] transform hover:-translate-y-1"
                    >
                      Submit Request
                    </button>
                  </form>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section >
    </>
  );
}

function ArrowUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  );
}
