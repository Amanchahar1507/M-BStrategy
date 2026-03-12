"use client";

import { useState } from "react";
import Image from "next/image";
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
      {/* ====== CORPORATE HERO ====== */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact_hero_bg.png"
            alt="Contact Us"
            fill
            className="object-cover opacity-10 scale-105 saturate-0"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/95" />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-20">
          <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79, 87, 223, 0.4) 0%, transparent 70%)" }} />
          <div className="absolute bottom-[-5%] left-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(253, 214, 59, 0.3) 0%, transparent 70%)" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
              <EnvelopeIcon className="h-4 w-4" />
              Get in Touch
            </span>
          </FadeIn>

          <TextGenerateEffect
            words="Let's Build Your Growth Strategy"
            className="text-4xl font-bold text-dark sm:text-5xl lg:text-6xl leading-[1.1]"
          />

          <FadeIn delay={0.4}>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              Ready to scale your brand with confidence? Tell us about your goals and we&apos;ll map out the next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ====== FORM SECTION ====== */}
      <section className="relative py-20 bg-soft-gray overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mt-32 -mr-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -mb-32 -ml-32" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                {submitted ? (
                  <div className="rounded-3xl bg-white border border-green-100 shadow-2xl shadow-gray-200/50 p-12 text-center">
                    <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-green-50 flex items-center justify-center ring-8 ring-green-100/50 shadow-[0_4px_14px_0_rgba(34,197,94,0.39)]">
                      <CheckCircleIcon className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-dark">Thank You!</h3>
                    <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
                      We&apos;ve received your message and sent a confirmation to your email. Our team will get back to you within <strong className="text-dark">24 business hours</strong>.
                    </p>
                    <Button
                      href="/"
                      variant="outline"
                      className="mt-8 border-gray-200 text-dark hover:border-primary hover:text-white hover:bg-primary"
                    >
                      Back to Home
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 p-8 sm:p-10">
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/5 border border-primary/10 mb-4">
                        <PaperAirplaneIcon className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Free Consultation</span>
                      </div>
                      <h2 className="text-2xl font-bold text-dark">Send Us a Message</h2>
                      <p className="text-sm text-gray-500 mt-1">Fields marked with * are required</p>
                    </div>

                    {error && (
                      <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
                        <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark placeholder-gray-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark placeholder-gray-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark placeholder-gray-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-dark mb-2">
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select a budget range</option>
                          <option value="under-1k">Under £1,000 / mo</option>
                          <option value="1k-3k">£1,000 - £3,000 / mo</option>
                          <option value="3k-5k">£3,000 - £5,000 / mo</option>
                          <option value="5k-plus">£5,000+ / mo</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="email">Email Marketing</option>
                          <option value="seo">SEO Optimisation</option>
                          <option value="social">Social Media Creatives & Management</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                          Tell Us About Your Goals *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-dark placeholder-gray-400 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white resize-none"
                          placeholder="Tell us about your brand, current challenges, and what you're looking to achieve..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_14px_0_rgba(79,87,223,0.39)] transition-all hover:bg-primary-dark hover:shadow-[0_6px_20px_rgba(79,87,223,0.23)] hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:-translate-y-0"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <PaperAirplaneIcon className="h-4 w-4" />
                            Book Your Free Strategy Call
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
                <div className="sticky top-32 space-y-6">
                  {/* Get in Touch Card */}
                  <div className="rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100 p-8 space-y-6">
                    <h3 className="text-xl font-bold text-dark">Get in Touch</h3>
                    <ul className="space-y-5">
                      {[
                        {
                          icon: <EnvelopeIcon className="h-5 w-5" />,
                          label: "Email",
                          value: "hello@marketingnbrandingstrategy.com",
                          color: "bg-primary/10 text-primary",
                        },
                        {
                          icon: <PhoneIcon className="h-5 w-5" />,
                          label: "Phone",
                          value: "+1 (555) 000-0000",
                          color: "bg-secondary/20 text-secondary-dark",
                        },
                        {
                          icon: <MapPinIcon className="h-5 w-5" />,
                          label: "Location",
                          value: "Global · Remote-first Agency",
                          color: "bg-blue-500/10 text-blue-600",
                        },
                        {
                          icon: <ClockIcon className="h-5 w-5" />,
                          label: "Response Time",
                          value: "Within 24 business hours",
                          color: "bg-purple-500/10 text-purple-600",
                        },
                      ].map((item) => (
                        <li key={item.label} className="flex items-start gap-4 group">
                          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-dark">{item.label}</p>
                            <p className="text-sm text-gray-500 break-all">{item.value}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Call Card — Corporate gradient */}
                  <div className="rounded-3xl p-8 text-white relative overflow-hidden bg-primary shadow-xl">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-3xl -ml-8 -mb-8" />
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3">Prefer a quick call?</h3>
                      <p className="text-sm text-white/80 mb-6 leading-relaxed">
                        Book a free 15-minute strategy call to discuss your needs face-to-face.
                      </p>
                      <Button
                        href="/contact"
                        variant="outline"
                        className="w-full border-white/20 text-white hover:bg-white hover:text-primary shadow-lg hover:-translate-y-1"
                      >
                        Book a Call
                      </Button>
                    </div>
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
