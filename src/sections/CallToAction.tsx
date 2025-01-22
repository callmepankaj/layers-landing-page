"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovevered] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
    }, []);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <main className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setIsHovevered(true)}
                    onMouseLeave={() => setIsHovevered(false)}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <section className="flex items-center gap-16" key={i}>
                            <span className=" text-7xl text-lime-400">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400 ">
                                Try it for free
                            </span>
                        </section>
                    ))}
                </motion.div>
            </div>
        </main>
    );
}
