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

        {/* ====== CREATIVE AGENCY HERO ====== */}
        <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-primary selection:bg-secondary selection:text-dark">
          {/* Massive Abstract Yellow Blob Background */}
          <motion.div
            className="absolute -top-[20%] right-[5%] w-[800px] h-[800px] bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90 blur-3xl mix-blend-overlay"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 0.9, 1.05, 1],
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "60% 40% 30% 70% / 50% 60% 40% 50%",
                "30% 70% 50% 50% / 60% 40% 50% 60%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-accent rounded-[60%_40%_30%_70%/50%_60%_40%_50%] opacity-80 blur-2xl mix-blend-multiply"
            animate={{
              rotate: [360, 270, 180, 90, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 mt-12 w-full"
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Text Content - overlapping 7 columns */}
              <div className="lg:col-span-7 relative z-20">
                <FadeIn>
                  <motion.div
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm font-bold text-secondary border border-secondary/30 backdrop-blur-md shadow-[0_0_20px_rgba(253,214,59,0.2)] mb-8"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  >
                    <motion.div
                      className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(253,214,59,0.8)]"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="tracking-wide uppercase">Award-Winning Strategy</span>
                  </motion.div>
                </FadeIn>

                <TextGenerateEffect
                  words="Leave Average Behind. We Engineer Growth."
                  className="text-4xl font-extrabold text-white sm:text-5xl tracking-tighter drop-shadow-md"
                />

                <FadeIn delay={0.4}>
                  <p className="mt-8 max-w-xl text-xl leading-relaxed text-blue-100 font-medium">
                    Stop blending in. We build aggressive, data-backed Marketing, SEO, and Social Strategies that command attention and drive relentless revenue.
                  </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="mt-10 flex flex-col sm:flex-row gap-5">
                    <Button href="/contact" variant="accent" className="px-8 py-4 text-lg">
                      Start Your Growth Engine
                    </Button>
                    <Button href="/services" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                      Explore Our Work
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Asymmetrical Image Element - breaking out of its container */}
              <div className="lg:col-span-5 relative mt-16 lg:mt-0 z-10 w-full flex justify-end">
                <FadeIn delay={0.5} className="relative w-[120%] -right-[15%] lg:-right-[30%]">
                  <motion.div style={{ y: heroImageY }} className="relative">
                    {/* The massive foreground blob image */}
                    <div className="relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out drop-shadow-2xl">
                      <BlobImage
                        src="/images/hero_corporate.png"
                        alt="Creative Agency Strategy Session"
                        delay={0.6}
                      />
                    </div>
                    
                    {/* Floating overlapping elements to break the grid */}
                    <motion.div
                      className="absolute -bottom-16 -left-24 z-30 rounded-[2rem] bg-dark p-6 shadow-2xl border border-white/10 w-72"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                          <RocketLaunchIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">600% ROI</p>
                          <p className="text-gray-400 text-xs text-secondary font-medium">Average Client Growth</p>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-secondary" 
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </FadeIn>
              </div>
            </div>
          </motion.div>

          {/* Diagonal slash background break */}
          <div className="absolute -bottom-[20%] left-0 w-[150%] h-32 bg-white transform -rotate-2 z-0 origin-left" />
        </section>
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

      {/* ===== ABOUT SNAPSHOT (YELLOW COLOR BLOCK) ===== */}
      <section className="relative py-24 lg:py-32 bg-secondary overflow-hidden selection:bg-dark selection:text-white">
        {/* Subtle texture over the yellow */}
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-10 mix-blend-multiply" />
        
        {/* Large abstract typography in background */}
        <div className="absolute -top-10 -left-10 z-0 text-[15rem] font-black text-black/5 leading-none select-none tracking-tighter">
          GROW.
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-4xl font-black text-dark sm:text-5xl tracking-tight mb-8">
                Evidence into Action.
              </h2>
              <div className="w-20 h-2 bg-dark mb-8" />
              <p className="text-dark/80 text-xl font-medium leading-relaxed">
                Marketing isn't magic. It's mathematics, psychology, and relentless iteration. 
                We engineer scalable strategies rooted in hard data, audience behavior, and 
                brand positioning to unlock compounding revenue.
              </p>
              <p className="mt-6 text-dark/80 text-lg leading-relaxed">
                We partner exclusively with ambitious brand owners who demand undeniable ROI, 
                crystal-clear reporting, and a team that refuses to settle for "good enough."
              </p>
              <div className="mt-10">
                <Button href="/about" variant="primary" className="bg-dark text-white hover:bg-black px-8 py-4">
                  Discover Our Methodology
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="relative group z-10">
                {/* Image offset and framed heavily */}
                <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl border-8 border-dark">
                  <BlobImage
                    src="/images/creative-workspace.png"
                    alt="M&B Strategy analyzing data"
                  />
                  <div className="absolute inset-0 bg-primary mix-blend-color opacity-20 group-hover:opacity-0 transition-opacity duration-500"/>
                </div>
                
                {/* Aggressive overlapping stat blocks */}
                <motion.div
                  className="absolute -bottom-10 -left-10 z-20 rounded-none bg-dark border-b-4 border-primary p-6 shadow-2xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-black text-white">150+</div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-widest mt-1">Growth Partners</div>
                </motion.div>

                <motion.div
                  className="absolute -top-10 -right-10 z-20 rounded-none bg-white border-t-4 border-secondary p-6 shadow-2xl"
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-4xl font-black text-dark">98%</div>
                  <div className="text-sm font-bold text-primary uppercase tracking-widest mt-1">Client Retention</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SERVICES WITH IMAGES ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <AnimatedGridPattern />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-dark sm:text-5xl tracking-tight mb-6">
                Dominate Your <span className="text-primary italic">Market.</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                We focus on three essential growth pillars that ambitious brands need to scale sustainably. No fluff. Just ROI.
              </p>
            </div>
            <Button href="/services" variant="outline" className="shrink-0 font-bold border-2">
              View All Capabilities
            </Button>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: <EnvelopeIcon className="h-6 w-6" />,
                title: "Email Marketing That Converts",
                desc: "Turn your list into a revenue engine. Strategic flows and campaigns that drive repeat purchases and extreme loyalty.",
                href: "/services/email-marketing",
                linkText: "Scale Your Email",
                image: "/images/service-email.png",
              },
              {
                icon: <MagnifyingGlassIcon className="h-6 w-6" />,
                title: "SEO Built for Dominance",
                desc: "Stop renting traffic. We build compounding organic visibility that positions you as the undisputed authority.",
                href: "/services/seo-optimisation",
                linkText: "Capture Search",
                image: "/images/service-seo.png",
              },
              {
                icon: <MegaphoneIcon className="h-6 w-6" />,
                title: "Social That commands Attention",
                desc: "Creative that stops the scroll. We build omnipresent social strategies that turn strangers into brand advocates.",
                href: "/services/social-media",
                linkText: "Command Social",
                image: "/images/service-social.png",
              },
            ].map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <MovingBorderCard>
                  <motion.a
                    href={service.href}
                    className="group block"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-64 overflow-hidden rounded-t-[2rem]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-dark shadow-xl shadow-secondary/30 transform transition-transform group-hover:rotate-12 group-hover:scale-110">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-8 bg-gray-50 border-t-4 border-transparent group-hover:border-primary transition-colors">
                      <h3 className="mb-3 text-2xl font-black text-dark tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-base font-medium leading-relaxed text-gray-500 mb-6">
                        {service.desc}
                      </p>
                      <span className="inline-flex items-center text-sm font-bold text-primary group-hover:gap-3 transition-all uppercase tracking-wider">
                        {service.linkText}
                        <svg
                          className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
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

      {/* ===== STATS — CLEAN PRIMARY BLUE BANNER ===== */}
      {/* ===== STATS — CLEAN PRIMARY BLUE BANNER ===== */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden selection:bg-white selection:text-primary">
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20 mix-blend-overlay" />
        
        {/* Massive background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-[12rem] lg:text-[20rem] font-black text-white/5 leading-none select-none tracking-tighter whitespace-nowrap">
          RESULTS.
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-2 border-white/20 pb-12">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black text-white sm:text-6xl tracking-tighter">
                  Data Doesn't Lie.
                </h2>
              </div>
              <p className="text-xl text-primary-light font-medium max-w-md text-right">
                We don't deal in vanity metrics. We deal in pipeline, acquisition, and compounding revenue.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4">
            <StatsCounter value={150} suffix="+" label="Ambitious Brands" light />
            <StatsCounter value={98} suffix="%" label="Client Retention" light />
            <StatsCounter value={3} suffix="x" label="Average ROI Lift" light />
            <StatsCounter value={5} suffix="M+" label="Emails Sent Monthly" light />
          </div>
        </div>
      </section>

      {/* ===== 4-STEP PROCESS (IMPRESSION DIGITAL STYLE Edge-to-Edge Cards) ===== */}
      {/* ===== 4-STEP PROCESS (AGENCY STYLE Edge-to-Edge) ===== */}
      <section className="relative w-full overflow-hidden bg-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mb-16">
            <h2 className="text-4xl font-black sm:text-6xl tracking-tighter text-white">
              The Engine.
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-2xl font-medium border-l-4 border-secondary pl-6">
              Strategy first. Execution second. Constant iteration forever. This is how we scale brands.
            </p>
          </div>
        </div>
        
        {/* Edge to Edge grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-y border-white/10">
          {[
            {
              step: "01",
              title: "Forensic Audit",
              desc: "Deep dive into your brand, audience, competitors, and past data to find massive growth gaps.",
              color: "bg-primary text-white", 
            },
            {
              step: "02",
              title: "Strategic Roadmap",
              desc: "Build a ruthless, tailored growth plan aligned strictly with your overriding revenue targets.",
              color: "bg-secondary text-dark", 
            },
            {
              step: "03",
              title: "Aggressive Execution",
              desc: "Launch high-converting sprint campaigns across Email, SEO, and Social channels with surgical precision.",
              color: "bg-white text-dark", 
            },
            {
              step: "04",
              title: "Relentless Scale",
              desc: "Track ROI, test radical new angles, kill what fails, and scale what works for compounding growth.",
              color: "bg-dark text-white", 
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              className={`relative flex flex-col justify-between p-10 xl:p-14 min-h-[450px] group overflow-hidden ${step.color} border-r border-white/10 last:border-r-0`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Massive Number Overlay */}
              <div className="absolute top-10 right-4 z-0 text-[10rem] font-black opacity-10 leading-none select-none tracking-tighter">
                {step.step}
              </div>

              {/* Ensure text sits above background */}
              <div className="relative z-10 flex flex-col h-full justify-end">
                <div>
                  <div className="mb-4 text-sm font-bold tracking-widest uppercase opacity-70">
                    Phase {step.step}
                  </div>
                  <h3 className="mb-6 text-3xl font-black leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <div className="w-12 h-1 bg-current opacity-30 mb-8" />
                  <p className="text-lg leading-relaxed opacity-90 font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Decorative hover arrow */}
              <div className="absolute bottom-10 right-10 w-8 opacity-0 transition-all duration-300 group-hover:right-6 group-hover:opacity-100 hidden md:block">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section >

      {/* ===== CTA & CONTACT FORM — CREATIVE AGENCY ===== */}
      <section className="relative py-28 lg:py-40 overflow-hidden bg-dark border-t border-white/10 selection:bg-secondary selection:text-dark">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
        
        {/* Massive Yellow Blob behind form */}
        <motion.div
           className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 blur-3xl mix-blend-screen pointer-events-none"
           animate={{
             rotate: [0, 90, 180, 270, 360],
             scale: [1, 1.2, 0.9, 1.1, 1],
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

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
                <span className="inline-block py-2 px-4 rounded-full bg-secondary text-dark text-sm font-black mb-6 tracking-widest uppercase shadow-[0_0_20px_rgba(253,214,59,0.4)]">
                  Ready to Scale?
                </span>
                <h2 className="text-4xl font-black text-white sm:text-5xl lg:text-7xl leading-[1.1] mb-8 tracking-tighter">
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
