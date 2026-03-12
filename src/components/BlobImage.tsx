import Image from "next/image";
import { motion } from "framer-motion";

interface BlobImageProps {
    src: string;
    alt: string;
    className?: string;
    delay?: number;
}

export default function BlobImage({ src, alt, className = "", delay = 0 }: BlobImageProps) {
    // A custom 4-lobed "blob" SVG path mimicking the client guidelines
    const blobPath =
        "M46.7,-64.1C60.1,-52.1,70.2,-36.8,75.3,-19.7C80.4,-2.6,80.5,16.2,71.8,31.7C63,47.2,45.4,59.3,27.1,65.5C8.8,71.7,-10.2,71.9,-27.6,66.4C-45,60.8,-60.8,49.5,-70.7,33.9C-80.6,18.3,-84.6,-1.6,-78.9,-18.2C-73.2,-34.8,-57.8,-48.1,-41.8,-59.4C-25.8,-70.7,-9.1,-80,4.8,-86.3C18.7,-92.6,33.3,-76.1,46.7,-64.1Z";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative w-full max-w-2xl mx-auto aspect-square group ${className}`}
        >
            {/* Interactive underlying Yellow Blob (Secondary Color) that shifts on hover */}
            <motion.div
                className="absolute inset-0 bg-secondary transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-6"
                style={{
                    clipPath: `path('${blobPath}')`,
                    transformOrigin: 'center center',
                    transform: 'scale(1.02) rotate(-5deg) translate(-2%, 2%)' // offset slightly for depth
                }}
                animate={{
                    rotate: [-5, 0, -5],
                    scale: [1.02, 1.05, 1.02],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Actual Masked Image */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                    clipPath: `path('${blobPath}')`,
                    transform: 'scale(0.98)' // slightly smaller than the background blob to leave an edge if desired, or perfectly overlapping
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Inner subtle glow/gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
            </div>
        </motion.div>
    );
}
