"use client";

import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <main className="  z-50 fixed w-full top-0 py-4 lg:py-8">
                <section className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur  ">
                        <section className="  grid grid-cols-2 lg:grid-cols-3   p-2 items-center  px-4 md:pr-2 ">
                            <div>
                                <Image
                                    src={logoImage}
                                    className="h-9 w-auto md:h-auto "
                                    alt="Layers logo"
                                />
                            </div>

                            <div className=" hidden   lg:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => {
                                        return (
                                            <a
                                                href={link.href}
                                                key={link.label}
                                            >
                                                {link.label}
                                            </a>
                                        );
                                    })}
                                </nav>
                            </div>

                            <div className="flex justify-end gap-4 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather   feather-menu md:hidden    "
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        className={` transition origin-left ${
                                            isOpen && "rotate-45 -translate-y-1"
                                        }`}
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                    ></line>
                                    <line
                                        className={` transition ${
                                            isOpen && "opacity-0"
                                        }`}
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                    ></line>
                                    <line
                                        className={` origin-left transition ${
                                            isOpen && "-rotate-45 translate-y-1"
                                        }`}
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                    ></line>
                                </svg>

                                <Button
                                    className="hidden md:inline-flex items-center"
                                    variant="secondary"
                                >
                                    Log In
                                </Button>

                                <Button
                                    className="hidden md:inline-flex items-center  "
                                    variant="primary"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </section>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden "
                                >
                                    <div className="flex  flex-col py-4   items-center gap-4">
                                        {navLinks.map((link) => {
                                            return (
                                                <a
                                                    key={link.label}
                                                    className=""
                                                    href={link.href}
                                                >
                                                    {link.label}
                                                </a>
                                            );
                                        })}

                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
            </main>
            <div className="pb-[86px]  md:pb-[98px] lg:px-[98px]"></div>
        </>
    );
}
