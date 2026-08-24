'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { FaExternalLinkAlt, FaGithub, FaFolderOpen } from 'react-icons/fa';

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Web Apps'];

  const projects = [
    {
      title: "E-Commerce Experience",
      category: "Full-Stack",
      description: "A modern online store built with Next.js, Stripe, and Tailwind. Features real-time cart updates, dynamic filtering, and a sleek dark theme UI.",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Web Apps",
      description: "Interactive data visualization dashboard with customizable widgets, real-time metrics tracking, and exportable analytics reports.",
      technologies: ["React", "Chart.js", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Interactive Portfolio",
      category: "Frontend",
      description: "An animated, highly interactive portfolio website built using ReactBits, glassmorphism design principles, and custom WebGL backgrounds.",
      technologies: ["React", "Next.js", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 w-full flex justify-center z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeFilter === category ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)] transition-all duration-300"
              >
                {/* Image & Overlay Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 border border-white/10 backdrop-blur-md text-xs font-semibold text-purple-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Badges & External Links */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-black/40 border border-white/5 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <Magnet padding={8}>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
                        >
                          <FaGithub size={18} /> Code
                        </a>
                      </Magnet>
                      <Magnet padding={8}>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          <FaExternalLinkAlt size={14} /> Live Demo
                        </a>
                      </Magnet>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}