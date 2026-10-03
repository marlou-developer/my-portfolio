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
            title: "Curtis International LTD - CRM",
            category: "Full-Stack",
            description: "A customer relationship management system tailored for tracking support cases, managing client interactions, and streamlining internal operations.",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript", 'Laravel'],
            image: "https://magnavox.com/wp-content/uploads/2025/05/Picture2-1024x839.png",
            github: "https://github.com/empireone-dev/curtis-crm",
            live: "https://curtis-css.com"
        },
        {
            title: "EmpireOneCX Careers",
            category: "Full-Stack",
            description: "A dedicated job portal and career platform featuring job listings, application workflows, and automated candidate tracking.",
            technologies: ["React", "Appscript", "Framer Motion", "Tailwind", 'Laravel'],
            image: "https://careers.empireonecx.com/images/E1CXlogo2.png",
            github: "https://github.com/EmpireOne-IT-Devs/empireone-web",
            live: "https://careers.empireonecx.com"
        },
        {
            title: "EmpireOne Health",
            category: "Full-Stack",
            description: "A comprehensive healthcare web platform built to manage patient services, medical consultations, and health information securely.",
            technologies: ["React", "Next.js", "Framer Motion", "Tailwind", 'Laravel'],
            image: "https://www.william-russell.com/wp-content/uploads/Healthcare-professionalshaking-hands-William-Russell.jpg",
            github: "https://github.com/empireone-dev/empireone-health",
            live: "https://www.empireonehealth.com"
        },
        {
            title: "Egies Beauty Boutique",
            category: "Full-Stack",
            description: "A point-of-sale and store management web app featuring real-time inventory updates, transaction logging, and live WebSocket notifications.",
            technologies: ["React", "Appscript", "Framer Motion", "Tailwind", 'Laravel', 'Pusher.js'],
            image: "https://egies-pos.store/images/logo.png",
            github: "https://github.com/marlou-developer/egies-pos",
            live: "https://egies-pos.store"
        },
        {
            title: "Curtis International LTD - Web Form",
            category: "Full-Stack",
            description: "An online claim resolution portal that simplifies customer submissions, warranty validations, and ticket processing.",
            technologies: ["React", "Appscript", "Framer Motion", "Tailwind", 'Laravel'],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANu7RHYNshLhabFthIpuqNm1ybHf9qzQZWwLQUhIjf500Ves-2qtW09E&s=10",
            github: "https://github.com/empireone-dev/curtis-v2",
            live: "https://curtis-international.com/resolution"
        },
        {
            title: "EmpireOneCX Unified Ticketing System",
            category: "Full-Stack",
            description: "An enterprise incident and inventory management platform designed for seamless ticket distribution, SLA tracking, and resolution monitoring.",
            technologies: ["React", "Appscript", "Framer Motion", "Tailwind", 'Laravel'],
            image: "https://careers.empireonecx.com/images/E1CXlogo2.png",
            github: "https://github.com/empireone-dev/empireone-system",
            live: "https://eo-unified-ims.com"
        },
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
                                <div className="relative h-48 w-full overflow-hidden bg-white">
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