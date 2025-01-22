import FeatureCard from "@/components/featureCard";
import Tag from "@/components/tag";
import Avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";

import Avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import Avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <main className="py-24 ">
            <div className="container">
                {/* heading tag */}
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>

                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto ">
                    Where power meets{" "}
                    <span className=" text-lime-400 ">simplicity</span>
                </h2>
                {/* features card */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-8">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description=" Work together seamlessly with conflict-free
                                editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <section className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    className="rounded-full"
                                    src={Avatar1}
                                    alt="Avatar 1"
                                />
                            </Avatar>
                            <Avatar className=" z-30 -ml-6 border-indigo-500">
                                <Image
                                    className="rounded-full"
                                    src={Avatar2}
                                    alt="Avatar 2"
                                />
                            </Avatar>
                            <Avatar className=" z-20 -ml-6 border-amber-500">
                                <Image
                                    className="rounded-full"
                                    src={Avatar3}
                                    alt="Avatar 3"
                                />
                            </Avatar>
                            <Avatar className="group-hover:border-green-500 -ml-6 border-transparent transition">
                                <div className=" relative size-full bg-neutral-700 rounded-full  inline-flex items-center justify-center gap-1   ">
                                    <Image
                                        src={Avatar4}
                                        alt={"avatar 4"}
                                        className="absolute size-full rounded-full    opacity-0 group-hover:opacity-100 transition "
                                    />

                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </section>
                    </FeatureCard>

                    {/* second */}
                    <FeatureCard
                        title="Interative Prototyping"
                        description="Engage your clients with prototypes that react
                                to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center ">
                            <p className="text-4xl font-extrbold text-white/20   text-center group-hover:text-white/10 transition duration-500  ">
                                We've achieved{" "}
                                <span className="bg-gradient-to-r   from-purple-400  to-pink-400  bg-clip-text text-transparent relative ">
                                    <span>incredible</span>
                                    <video
                                        src="/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2  -translate-x-[10%] 
                                        md:-translate-x-1/2
                                        rounded-2xl shadow-xl opacity-0 pointer-events-none  transition duration-500 group-hover:opacity-100 "
                                    />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    {/* third */}
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs
                                more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto "
                    >
                        <div className="aspect-video  flex items-center justify-center gap-4 group">
                            <Key className="w-28 outline  outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 outline-transparent transition-all duration-500 ">
                                shift
                            </Key>
                            <Key className="outline  outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 outline-transparent transition-all duration-500 delay-150 ">
                                alt
                            </Key>
                            <Key className="outline  outline-2 outline-offset-4 group-hover:outline-lime-400 group-hover:translate-y-1 outline-transparent transition-all duration-500 delay-300">
                                C
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                {/* features footer */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center     ">
                    {features.map((feature) => {
                        return (
                            <div
                                key={feature}
                                className="bg-neutral-900 border border-white/10  inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105  duration-500 group transition "
                            >
                                <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center  text-xl group-hover:rotate-45 transition duration-500 ">
                                    &#10038;
                                </span>
                                <span className="font-medium md:text-lg transition ">
                                    {feature}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
