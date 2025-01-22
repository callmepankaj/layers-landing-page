import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <main className="py-16">
            <div className="container">
                <section className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image alt="Layers logo" src={logoImage} />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => {
                                return (
                                    <a
                                        key={link.href}
                                        className="text-white/50 text-sm"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>
                </section>
            </div>
        </main>
    );
}
