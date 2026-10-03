'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';

export default function ExperienceSection() {
    // Placeholder data - replace with your actual experience!
    const experiences = [
        {
            role: "Software Engineer",
            company: "Koda Kollectiv",
            date: "June 1 2022 - March 31, 2024",
            description: "Leading the frontend architecture for high-traffic enterprise applications. Migrated legacy systems to Next.js, improving page load speeds by 40% and boosting SEO rankings.",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS",'Laravel']
        },
        {
            role: "Senior Full Stack Developer",
            company: "EmpireOneCX",
            date: `April 1, 2024 - ${moment().subtract(20, 'days').format('LL')}`,
            description: "Developed responsive, interactive, and highly animated marketing websites for premium clients. Collaborated closely with UI/UX designers to implement pixel-perfect layouts.",
            technologies: ["JavaScript", "React", "Framer Motion", "Sass",'Pusher.js','Laravel','Open AI','Appscript']
        },
        // {
        //   role: "Web Development Intern",
        //   company: "StartupX",
        //   date: "Jun 2020 - Feb 2021",
        //   description: "Assisted in building internal dashboard tools. Handled API integrations, state management, and basic UI bug fixes across the main web application.",
        //   technologies: ["HTML/CSS", "JavaScript", "React", "Redux"]
        // }
    ];

    return (
        <section id="experience" className="relative py-24 w-full flex justify-center z-10 pointer-events-auto">
            <div className="max-w-4xl mx-auto px-6 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 md:mb-24 text-center flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold tracking-widest uppercase text-sm">
                            My Journey
                        </span>
                        <span className="w-8 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative border-l border-white/10 md:ml-6 ml-3">

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="mb-12 relative pl-8 md:pl-12 group"
                        >

                            {/* Glowing Timeline Node */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gray-900 border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300 z-10" />

                            {/* Optional: Animated line highlight on hover */}
                            <div className="absolute -left-[1px] top-1.5 bottom-[-48px] w-[2px] bg-gradient-to-b from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                            {/* Glassmorphic Experience Card */}
                            <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                                            <FaBriefcase className="text-purple-400" size={18} />
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
                                            {exp.company}
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 text-sm font-medium w-fit">
                                        <FaCalendarAlt size={14} />
                                        {exp.date}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                {/* Technologies used */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium text-gray-300 bg-black/40 border border-white/10 rounded-lg hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}