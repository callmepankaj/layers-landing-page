"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    // animationfor pointer and design images

    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);

    return (
        <main
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden  lg:block  "
                >
                    <Image
                        src={designExample1Image}
                        alt="design example 1"
                        draggable="false"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden  lg:block "
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    drag
                    className="absolute hidden lg:block -right-64 -top-16 "
                >
                    <Image
                        src={designExample2Image}
                        alt="design example 2"
                        draggable="false"
                    />
                </motion.div>
                {/* mouse pointer */}

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 275 }}
                    className="absolute right-80 -top-4  hidden  lg:block"
                >
                    <Pointer name="Brian" color="red" />
                </motion.div>

                <section className="flex justify-center">
                    <div className="inline-flex px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ #7.5m seed round raised
                    </div>
                </section>
                <h1 className="text-6xl md:text-7xl lg:text-8xl  font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>

                <p className="text-center text-xl  text-white/50 mt-8  max-w-2xl mx-auto ">
                    Design tools shouldn't slow you down. Layers combine
                    powerful features with an intuitive interface that keeps you
                    in your creative flow
                </p>
                <form className="flex text-white/50 border rounded-full p-2 mt-8 max-w-lg mx-auto w-full ">
                    <input
                        className="bg-transparent flex-1  "
                        type="email"
                        placeholder="Enter your email"
                    />

                    <Button
                        variant={"primary"}
                        type="submit"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </main>
    );
}
