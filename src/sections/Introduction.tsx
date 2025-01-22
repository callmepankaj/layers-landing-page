"use client";

import Tag from "@/components/tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end start"], // Adjusted offset for smoother effect
    });

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            const wordNumber = Math.min(words.length, Math.floor(latest));
            setCurrentWord(wordNumber); // Ensure word number stays within bounds
        });
        return () => unsubscribe();
    }, [wordIndex]);

    return (
        <main className="py-28 lg:py-40">
            <div className="container">
                <section className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>

                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span>
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={`transition-all duration-500 ${
                                        index < currentWord
                                            ? "text-white"
                                            : "text-white/15"
                                    }`}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That's why we built layers.
                        </span>
                    </div>
                </section>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </main>
    );
}
