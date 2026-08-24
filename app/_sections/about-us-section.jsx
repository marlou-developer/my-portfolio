'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { FaCode, FaLaptopCode, FaRocket, FaUserAstronaut } from 'react-icons/fa';

export default function AboutUsSection() {
  // Framer Motion variants for staggered scroll animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cards = [
    {
      icon: <FaLaptopCode size={24} className="text-pink-500" />,
      title: "Frontend Focused",
      desc: "Specializing in React, Next.js, and modern CSS frameworks to build pixel-perfect UIs."
    },
    {
      icon: <FaCode size={24} className="text-purple-500" />,
      title: "Clean Architecture",
      desc: "Writing scalable, maintainable, and highly optimized code for complex web applications."
    },
    {
      icon: <FaRocket size={24} className="text-blue-500" />,
      title: "Performance First",
      desc: "Ensuring lightning-fast load times and smooth animations for the best user experience."
    }
  ];

  return (
    <section id="about" className="relative py-24 w-full flex justify-center z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold tracking-widest uppercase text-sm">
              Discover
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Split Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* LEFT: Bio Text */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-2">
              <FaUserAstronaut size={28} className="text-gray-300" />
            </div>
            <h3 className="text-3xl font-bold text-white leading-snug">
              Designing with purpose, <br />
              <span className="text-gray-400">building with passion.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hello! I'm Marlou, a dedicated Web Developer with a strong passion for crafting interactive and intuitive digital experiences. I bridge the gap between design and engineering, ensuring every pixel serves a purpose.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not writing code or debugging complex layouts, I'm constantly exploring new web technologies, UI/UX trends, and animation libraries to push the boundaries of what's possible in the browser.
            </p>
            
            <div className="mt-4">
              <Magnet padding={15}>
                <a href="#projects" className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                  See My Work
                </a>
              </Magnet>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Glass Cards (Bento Grid) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Map through the cards array */}
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:border-white/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center border border-white/5">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white">{card.title}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}