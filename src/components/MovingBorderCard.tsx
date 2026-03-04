"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MovingBorderCardProps {
    children: ReactNode;
    className?: string;
    borderColor?: string;
    duration?: number;
}

export default function MovingBorderCard({
    children,
    className = "",
    borderColor = "rgba(37, 99, 235, 0.6)",
    duration = 4,
}: MovingBorderCardProps) {
    return (
        <div className={`relative rounded-2xl p-[2px] overflow-hidden ${className}`}>
            {/* Animated border gradient */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `conic-gradient(from 0deg, transparent 0%, ${borderColor} 25%, transparent 50%, ${borderColor} 75%, transparent 100%)`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Inner content */}
            <div className="relative z-10 rounded-2xl bg-white h-full">
                {children}
            </div>
        </div>
    );
}
