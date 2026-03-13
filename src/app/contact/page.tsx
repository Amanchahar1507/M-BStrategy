"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import TextGenerateEffect from "@/components/TextGenerateEffect";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const result = await res.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* ====== AGENCY HERO (DARK BLOCK) ====== */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-dark selection:bg-secondary selection:text-dark">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
        
        {/* Massive Yellow Blob behind text */}
        <motion.div
           className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 blur-3xl mix-blend-screen pointer-events-none"
           animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 0.9, 1.1, 1] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block py-2 px-4 rounded-none bg-white/10 text-white uppercase text-sm font-black mb-8 tracking-widest backdrop-blur-sm border border-white/20">
              The Next Step
            </span>
          </FadeIn>

          <TextGenerateEffect
            words="Stop Guessing. Start Scaling."
            className="text-5xl font-black text-white sm:text-7xl leading-[1.05] tracking-tighter"
          />

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400 leading-relaxed font-bold">
              Ready to burn the playbook? Apply for a free 30-minute strategy audit where we map out your exact compounding growth system.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ====== FORM SECTION (PRIMARY BLUE BLOCK) ====== */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden text-white selection:bg-secondary selection:text-dark">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-10 mix-blend-overlay" />
        
        {/* Background Typography */}
        <div className="absolute -bottom-10 left-[-10%] z-0 text-[15rem] lg:text-[20rem] font-black text-white/5 leading-none select-none tracking-tighter pointer-events-none">
            INFILTRATE
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                {submitted ? (
                  <div className="rounded-none bg-dark border-4 border-secondary p-12 text-center shadow-2xl relative">
                    <div className="mx-auto mb-6 h-24 w-24 rounded-none bg-secondary flex items-center justify-center text-dark shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                      <CheckCircleIcon className="h-12 w-12" />
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tight">Signal Received.</h3>
                    <p className="mt-6 text-xl text-gray-400 max-w-md mx-auto leading-relaxed">
                      We've dispatched a confirmation. A senior strategist will review your application and respond within <strong className="text-secondary font-black">24 hours</strong>.
                    </p>
                    <Button
                      href="/"
                      variant="primary"
                      className="mt-10 bg-white text-dark hover:bg-secondary hover:text-dark px-8 py-4 text-lg font-black"
                    >
                      Return to Base
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-none bg-white p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(40,39,57,1)] relative">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-secondary" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary" />
                    
                    <div className="mb-10 border-l-8 border-secondary pl-6">
                      <h2 className="text-3xl sm:text-4xl font-black text-dark tracking-tighter leading-none">Apply For <span className="text-primary italic">Partnership.</span></h2>
                      <p className="text-base text-gray-500 font-bold mt-4">We respect your time. Be ruthless with the details. * Fields required.</p>
                    </div>

                    {error && (
                      <div className="mb-8 flex items-center gap-4 p-5 rounded-none bg-dark border-b-4 border-red-500 text-white text-sm font-bold shadow-lg">
                        <ExclamationCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">First Name *</label>
                          <input
                            type="text" id="firstName" name="firstName" required
                            className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium placeholder-gray-400 outline-none transition-all focus:border-dark focus:bg-white focus:ring-0"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">Last Name *</label>
                          <input
                            type="text" id="lastName" name="lastName" required
                            className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium placeholder-gray-400 outline-none transition-all focus:border-dark focus:bg-white focus:ring-0"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">Work Email *</label>
                        <input
                          type="email" id="email" name="email" required
                          className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium placeholder-gray-400 outline-none transition-all focus:border-dark focus:bg-white focus:ring-0"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">Company Name</label>
                          <input
                            type="text" id="company" name="company"
                            className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium placeholder-gray-400 outline-none transition-all focus:border-dark focus:bg-white focus:ring-0"
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <label htmlFor="service" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">Primary Objective</label>
                          <div className="relative">
                            <select
                              id="service" name="service"
                              className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium outline-none transition-all focus:border-dark focus:bg-white appearance-none cursor-pointer"
                            >
                              <option value="">Select a mission...</option>
                              <option value="email">Dominate Inbox (Email)</option>
                              <option value="seo">Command Search (SEO)</option>
                              <option value="social">Hijack Attention (Social)</option>
                              <option value="multiple">Full System Redesign</option>
                              <option value="not-sure">Not Sure Yet</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg className="h-5 w-5 text-dark" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-black text-dark tracking-wide uppercase mb-2">Current Reality vs. Target Reality *</label>
                        <textarea
                          id="message" name="message" rows={5} required
                          className="w-full rounded-none border-2 border-gray-200 bg-gray-50 px-5 py-4 text-dark font-medium placeholder-gray-400 outline-none transition-all focus:border-dark focus:bg-white resize-none"
                          placeholder="Where are you now? Where do you want to be? What's stopping you?"
                        />
                      </div>

                      <button
                        type="submit" disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-3 rounded-none bg-dark px-8 py-5 text-lg font-black tracking-widest uppercase text-white transition-all hover:bg-black hover:text-secondary disabled:opacity-60 disabled:cursor-not-allowed shadow-[6px_6px_0px_0px_rgba(253,214,59,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,214,59,1)]"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <PaperAirplaneIcon className="h-5 w-5" />
                            Submit Application
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </FadeIn>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="sticky top-32 space-y-8 text-left">
                  {/* Intel Card */}
                  <div className="rounded-none bg-dark border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full blur-2xl" />
                    <h3 className="text-3xl font-black text-white mb-8 tracking-tighter">Direct Intel.</h3>
                    <ul className="space-y-6">
                      {[
                        { icon: <EnvelopeIcon className="h-6 w-6" />, label: "Email", value: "hello@marketingnbrandingstrategy.com" },
                        { icon: <ClockIcon className="h-6 w-6" />, label: "Response", value: "T+24 Hours" },
                        { icon: <MapPinIcon className="h-6 w-6" />, label: "HQ", value: "Global / Remote" },
                      ].map((item) => (
                        <li key={item.label} className="flex items-center gap-5 group">
                          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-none bg-white/5 text-secondary group-hover:bg-secondary group-hover:text-dark transition-colors border border-white/10 group-hover:border-secondary">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-black tracking-widest text-primary-light uppercase">{item.label}</p>
                            <p className="text-base text-white font-medium break-all">{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Warning Box */}
                  <div className="rounded-none bg-secondary p-8 text-dark relative shadow-[8px_8px_0px_0px_rgba(40,39,57,1)]">
                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Warning: High Volume</h3>
                    <p className="text-base font-bold leading-relaxed">
                      Due to the intensive nature of our campaigns, we only onboard 3 new partners per quarter. Ensure your application is detailed to secure priority review.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
