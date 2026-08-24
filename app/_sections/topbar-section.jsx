// src/app/_components/Topbar.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { Menu, X, Hexagon } from 'lucide-react';

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Complete navigation list matching all portfolio sections
    const links = ['About', 'Experience', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            {/* Centered, floating pill layout */}
            <motion.div
                initial={{ y: -100, x: "-50%" }}
                animate={{ y: 0, x: "-50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-6 left-1/2 z-50 w-[95%] max-w-4xl transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'
                    }`}
            >
                <nav className="flex justify-between items-center h-16 px-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto">

                    {/* Logo Section */}
                    <Magnet padding={10}>
                        <a href="#hero" className="flex items-center gap-2 text-base font-bold text-white tracking-widest uppercase">
                            <Hexagon size={20} className="text-purple-400" />
                            <span>Marlou Dev</span>
                        </a>
                    </Magnet>

                    {/* Desktop Links & Action Button */}
                    <div className="hidden md:flex items-center space-x-6">
                        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-300">
                            {links.map((link) => (
                                <li key={link}>
                                    <Magnet padding={12}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </Magnet>
                                </li>
                            ))}
                        </ul>

                        {/* Action Call to Action Button */}
                        <Magnet padding={10}>
                            <a
                                href="#contact"
                                className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            >
                                Let's Talk
                            </a>
                        </Magnet>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Magnet padding={10}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white p-2 transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </Magnet>
                    </div>
                </nav>
            </motion.div>

            {/* Fullscreen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-2xl flex flex-col justify-center items-center pointer-events-auto"
                    >
                        <ul className="flex flex-col space-y-8 text-center items-center">
                            {links.map((link, i) => (
                                <motion.li
                                    key={link}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1) }}
                                >
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold text-gray-400 hover:text-white transition-all"
                                    >
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (links.length * 0.1) }}
                            >
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-4 mt-4 inline-block text-xl font-semibold text-black bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    Let's Talk
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}