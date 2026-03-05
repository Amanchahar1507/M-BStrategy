import Link from "next/link";
import Image from "next/image";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
    services: [
        { href: "/services/email-marketing", label: "Email Marketing" },
        { href: "/services/seo-optimisation", label: "SEO Optimisation" },
        { href: "/services/social-media", label: "Social Media Management" },
    ],
    company: [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About Us" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-navy overflow-hidden text-white border-t border-white/5">
            {/* Animated Fluid Background */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <Image
                    src="/images/footer-bg-blob.png"
                    alt="Abstract background"
                    fill
                    className="object-cover object-bottom opacity-70"
                />
            </div>

            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px] z-0 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-electric-dark text-white font-bold text-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                M&B
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">Strategy</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
                            We don't just market brands — we build predictable strategies that drive scalable growth and measurable ROI.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-light mb-6">
                            Growth Services
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-light mb-6">
                            Company
                        </h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-electric-light mb-6">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-sm text-gray-400 group">
                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric/20 group-hover:border-electric/30 transition-colors">
                                    <EnvelopeIcon className="h-4 w-4 text-gray-300 group-hover:text-electric-light transition-colors" />
                                </div>
                                <span className="mt-1.5 hover:text-white transition-colors cursor-pointer">
                                    hello@marketingnbrandingstrategy.com
                                </span>
                            </li>
                            <li className="flex items-start gap-4 text-sm text-gray-400 group">
                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric/20 group-hover:border-electric/30 transition-colors">
                                    <PhoneIcon className="h-4 w-4 text-gray-300 group-hover:text-electric-light transition-colors" />
                                </div>
                                <span className="mt-1.5 hover:text-white transition-colors cursor-pointer">
                                    +1 (555) 000-0000
                                </span>
                            </li>
                            <li className="flex items-start gap-4 text-sm text-gray-400 group">
                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-electric/20 group-hover:border-electric/30 transition-colors">
                                    <MapPinIcon className="h-4 w-4 text-gray-300 group-hover:text-electric-light transition-colors" />
                                </div>
                                <span className="mt-1.5 hover:text-white transition-colors cursor-pointer">
                                    Global · Remote-first Agency
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar — Glassy separation */}
                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-gray-500 font-medium">
                        © {new Date().getFullYear()} M&B Strategy. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="text-xs font-medium text-gray-500 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-xs font-medium text-gray-500 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
