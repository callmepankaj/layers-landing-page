import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}) {
    const { title, description, children, className } = props;
    return (
        <main
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-6 rounded-3xl ",
                className
            )}
        >
            <section className="aspect-video">{children}</section>
            <section>
                <h3 className="text-3xl font-medium mt-6 ">{title}</h3>
                <p className="textt-white/50">{description}</p>
            </section>
        </main>
    );
}
