"use client";

import { motion } from "framer-motion";

export default function BackgroundBeams({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg
                className="absolute h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(37, 99, 235, 0.15)" />
                        <stop offset="50%" stopColor="rgba(37, 99, 235, 0.05)" />
                        <stop offset="100%" stopColor="rgba(37, 99, 235, 0)" />
                    </linearGradient>
                </defs>
                {[...Array(6)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1={`${10 + i * 18}%`}
                        y1="0%"
                        x2={`${30 + i * 12}%`}
                        y2="100%"
                        stroke="url(#beam-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
            {/* Gradient orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-electric/5 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-electric/5 blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
