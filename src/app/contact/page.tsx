"use client";

import { useState } from "react";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-electric">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Build Your{" "}
              <span className="gradient-text">Growth Strategy</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
              Ready to scale your brand with confidence? Tell us about your
              goals and we&apos;ll map out the next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <Section variant="white">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn>
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Thank you!</h3>
                  <p className="mt-2 text-gray-500">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-navy mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20 bg-white"
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy mb-2"
                    >
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-navy placeholder-gray-400 outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20 resize-none"
                      placeholder="Tell us about your brand, current challenges, and what you're looking to achieve..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Book Your Free Strategy Call
                  </Button>
                </form>
              )}
            </FadeIn>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-gray-200 bg-soft-gray p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-6">
                    Get in Touch
                  </h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                        <EnvelopeIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">Email</p>
                        <p className="text-sm text-gray-500">
                          hello@marketingnbrandingstrategy.com
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                        <PhoneIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">Phone</p>
                        <p className="text-sm text-gray-500">+1 (555) 000-0000</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                        <MapPinIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">Location</p>
                        <p className="text-sm text-gray-500">
                          Global · Remote-first Agency
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-electric/10 text-electric">
                        <ClockIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy">
                          Response Time
                        </p>
                        <p className="text-sm text-gray-500">
                          Within 24 business hours
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    Prefer a quick call?
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Book a free 15-minute strategy call to discuss your needs.
                  </p>
                  <Button href="/contact" variant="outline" className="w-full">
                    Book a Call
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>
    </>
  );
}
