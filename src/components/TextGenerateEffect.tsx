"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextGenerateEffectProps {
    words: string;
    className?: string;
}

export default function TextGenerateEffect({
    words,
    className = "",
}: TextGenerateEffectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const wordArray = words.split(" ");

    return (
        <motion.div ref={ref} className={className}>
            {wordArray.map((word, idx) => (
                <motion.span
                    key={`${word}-${idx}`}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={
                        isInView
                            ? { opacity: 1, filter: "blur(0px)" }
                            : { opacity: 0, filter: "blur(8px)" }
                    }
                    transition={{
                        duration: 0.4,
                        delay: idx * 0.08,
                        ease: "easeOut",
                    }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
