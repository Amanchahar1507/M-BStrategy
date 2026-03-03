import Link from "next/link";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
    services: [
        { href: "/services/email-marketing", label: "Email Marketing" },
        { href: "/services/seo-optimisation", label: "SEO" },
        { href: "/services/social-media", label: "Social Media" },
    ],
    company: [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric text-white font-bold text-lg">
                                M&B
                            </div>
                            <span className="text-xl font-bold">Strategy</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Strategy-led marketing for modern brands.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info + CTA */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                            Get in Touch
                        </h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <EnvelopeIcon className="h-4 w-4 text-electric" />
                                hello@marketingnbrandingstrategy.com
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <PhoneIcon className="h-4 w-4 text-electric" />
                                +1 (555) 000-0000
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPinIcon className="h-4 w-4 text-electric" />
                                Global · Remote-first
                            </li>
                        </ul>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white hover:bg-electric-dark transition-colors btn-glow"
                        >
                            Free Strategy Call
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} M&B Strategy. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="#"
                            className="text-xs text-gray-500 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-xs text-gray-500 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
