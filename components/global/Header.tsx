"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brandButtonClassNameSm, navLinks } from "@/constants";
import logo from "@/public/images/demo-realestate-logo.svg";

type MobileNavItemProps = {
    href: string;
    label: string;
    index: number;
    isActive: boolean;
    onNavigate: () => void;
};

function MobileNavItem({
    href,
    label,
    index,
    isActive,
    onNavigate,
}: MobileNavItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{
                duration: 0.35,
                delay: 0.05 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <Link
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={`block rounded-2xl px-5 py-4 text-base font-medium transition ${isActive
                    ? "border-l-4 border-brand-green bg-brand-surface text-parkonic-secondary"
                    : "bg-gray-50 text-parkonic-grey hover:bg-gray-100 hover:text-parkonic-secondary"
                    }`}
            >
                {label}
            </Link>
        </motion.div>
    );
}

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const closeMenu = () => setOpen(false);

    const isNavActive = (href: string) => pathname === href;

    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeMenu();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-[0_1px_5px_0_rgba(83,83,83,0.15)] backdrop-blur-xl">
            <div className="relative mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-6 sm:px-8 lg:px-10">
                <Link
                    href="/"
                    className="relative z-20 flex shrink-0 items-center"
                    title="Demo Real Estate"
                >
                    <Image
                        src={logo}
                        alt="Demo Real Estate"
                        width={180}
                        height={56}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>

                <nav
                    aria-label="Main navigation"
                    className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:gap-8"
                >
                    {navLinks.map((item) => {
                        const isActive = isNavActive(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`relative whitespace-nowrap pb-1 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-200 ${isActive
                                    ? "text-parkonic-secondary after:w-full after:bg-brand-green"
                                    : "text-parkonic-primary after:w-0 after:bg-brand-green hover:text-parkonic-secondary hover:after:w-full"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="relative z-20 flex shrink-0 items-center gap-3">
                    <div className="hidden lg:block">
                        <Link href="/contact" className={brandButtonClassNameSm}>
                            Contact Us
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen((state) => !state)}
                        className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-parkonic-grey transition hover:border-parkonic-grey/30 lg:hidden"
                        aria-label={open ? "Close navigation" : "Open navigation"}
                        aria-expanded={open}
                    >
                        <span className="relative block h-4 w-5">
                            <motion.span
                                className="absolute top-0 left-0 block h-0.5 w-5 rounded-full bg-current"
                                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                            <motion.span
                                className="absolute top-[7px] left-0 block h-0.5 w-5 rounded-full bg-current"
                                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            />
                            <motion.span
                                className="absolute top-[14px] left-0 block h-0.5 w-5 rounded-full bg-current"
                                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </span>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close navigation overlay"
                            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            onClick={closeMenu}
                        />

                        <motion.aside
                            className="fixed top-0 left-0 z-[65] flex h-dvh min-h-screen w-[min(88vw,320px)] flex-col border-r border-gray-200 bg-white shadow-[40px_0_120px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:hidden"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex shrink-0 items-center border-b border-gray-100 px-5 py-5">
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    title="Demo Real Estate"
                                >
                                    <Image
                                        src={logo}
                                        alt="Demo Real Estate"
                                        width={180}
                                        height={56}
                                        className="h-11 w-auto object-contain"
                                    />
                                </Link>
                            </div>

                            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-5 py-6 pb-8">
                                {navLinks.map((item, index) => (
                                    <MobileNavItem
                                        key={item.href}
                                        href={item.href}
                                        label={item.label}
                                        index={index}
                                        isActive={isNavActive(item.href)}
                                        onNavigate={closeMenu}
                                    />
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: -24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -16 }}
                                    transition={{
                                        duration: 0.35,
                                        delay: 0.05 + navLinks.length * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="mt-4 px-1"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={closeMenu}
                                        className={`inline-flex w-full justify-center ${brandButtonClassNameSm} py-4`}
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
