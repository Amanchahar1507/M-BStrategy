"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    className?: string;
}

export default function InfiniteMarquee({
    children,
    speed = 30,
    direction = "left",
    className = "",
}: InfiniteMarqueeProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                className="flex gap-8 w-max"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
