// src/app/_components/Hero.jsx
'use client';

import { motion } from 'framer-motion';
import Magnet from '@/app/_components/Magnet'; // Your ReactBits component

// Removed lucide-react entirely and imported everything from react-icons/fa
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaDribbble,
    FaArrowRight,
    FaUser,
    FaChartBar
} from 'react-icons/fa';
import socials from '@/app/_lib/socials'

export default function HeroSection() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center pt-30 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pointer-events-auto">

                {/* ======================= */}
                {/* LEFT COLUMN (Text & CTAs) */}
                {/* ======================= */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start"
                >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-white font-bold tracking-widest text-sm">I AM</span>
                        <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                            SOFTWARE ENGINEER
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white leading-[1.2] mb-6">
                        Maximize Your Business <br className="hidden md:block" />
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-2">
                            Potential
                            {/* Glowing Underline */}
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
                        </span>{' '}
                        with Custom <div className='text-3xl'>
                            Web
                            Development <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mt-2">
                                Solutions!
                                {/* Glowing Underline */}
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            </span>
                        </div>
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                        Take your business to the next level with custom web development solutions tailored exactly to your needs.
                    </p>

                    {/* Buttons wrapped in ReactBits Magnet */}
                    <div className="flex items-center justify-center gap-6">
                        <a href="#contact" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all">
                            Get in Touch
                            {/* Updated Icon */}
                            <FaArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="/cv.pdf" className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold rounded-xl hover:bg-white/5 hover:border-white transition-all">
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* ======================= */}
                {/* RIGHT COLUMN (Visuals) */}
                {/* ======================= */}
                <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center mt-12 lg:mt-0">

                    {/* Animated Background Blob */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.05, 1],
                            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "50% 50% 50% 50% / 50% 50% 50% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-pink-600 via-purple-600 to-blue-600 opacity-90 blur-sm"
                    />

                    {/* Hero Image (Replace src with your actual image path) */}
                    <img
                        src="/images/profile.png"
                        alt="Web Developer"
                        className="relative z-10 w-full max-w-[350px] md:max-w-[400px] rounded-full object-contain drop-shadow-2xl"
                    />


                    {/* Social Icons Arc (Bottom) */}
                    <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                        {/* Array updated to use React Icons */}
                        {socials.map(({ Icon, label, link }, index) => (
                            <Magnet key={index} padding={10}>
                                <a
                                    href={link || "#"}
                                    aria-label={label}
                                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border border-gray-700 text-white hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-xl  `}
                                >
                                    <Icon size={index === 2 ? 24 : 20} />
                                </a>
                            </Magnet>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}