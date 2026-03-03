"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatsCounterProps {
    value: number;
    suffix?: string;
    label: string;
    light?: boolean;
}

export default function StatsCounter({
    value,
    suffix = "",
    label,
    light = false,
}: StatsCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const step = value / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <motion.div
            ref={ref}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <div
                className={`text-4xl font-bold sm:text-5xl ${light ? "text-white" : "gradient-text"
                    }`}
            >
                {count}
                {suffix}
            </div>
            <div
                className={`mt-2 text-sm font-medium ${light ? "text-gray-300" : "text-gray-500"
                    }`}
            >
                {label}
            </div>
        </motion.div>
    );
}
