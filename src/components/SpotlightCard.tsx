"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export default function SpotlightCard({
    children,
    className = "",
}: SpotlightCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl ${className}`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
        >
            {/* Spotlight gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(37, 99, 235, 0.08), transparent 70%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
