"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface FloatingImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export default function FloatingImage({
    src,
    alt,
    width,
    height,
    className = "",
}: FloatingImageProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate }}
            className={`relative ${className}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Glow shadow */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-electric/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    );
}
