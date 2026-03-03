"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const directionMap = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                x: directionMap[direction].x,
                y: directionMap[direction].y,
            }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : {
                        opacity: 0,
                        x: directionMap[direction].x,
                        y: directionMap[direction].y,
                    }
            }
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
