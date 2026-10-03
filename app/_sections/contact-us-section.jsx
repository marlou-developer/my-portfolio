'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaCopy, FaCheck } from 'react-icons/fa';

export default function ContactUsSection() {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const emailAddress = "marlou.developer@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormState({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contacts" className="relative py-24 w-full flex justify-center z-10 pointer-events-auto">
            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-16 text-center flex flex-col items-center"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold tracking-widest uppercase text-sm">
                            Get In Touch
                        </span>
                        <span className="w-8 h-[2px] bg-gradient-to-l from-pink-500 to-purple-500 rounded-full" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-lg text-lg">
                        Have a project in mind, a question, or just want to say hi? Feel free to send a message!
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* LEFT: Contact Cards & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        {/* Quick Copy Email Card */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Email Me At</h3>
                                    <p className="text-xl font-bold text-white mt-1">{emailAddress}</p>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-purple-500/50 transition-all w-fit"
                                >
                                    {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                                    {copied ? "Copied to Clipboard!" : "Copy Address"}
                                </button>
                            </div>
                        </div>

                        {/* Location & Phone Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30 mb-3">
                                    <FaMapMarkerAlt size={18} />
                                </div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                                <p className="text-base font-bold text-white mt-1">Western Visayas, PH</p>
                            </div>

                            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 mb-3">
                                    <FaPhone size={18} />
                                </div>
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Availability</h4>
                                <p className="text-base font-bold text-white mt-1">Open for Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Interactive Glass Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* Name Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300">Your Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    placeholder="Tell me about your project or idea..."
                                    className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button wrapped in Magnet */}
                            <div className="mt-2">
                                <Magnet padding={12}>
                                    <button
                                        type="submit"
                                        disabled={submitted}
                                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                                    >
                                        {submitted ? (
                                            <>
                                                <FaCheck className="text-white" /> Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane size={16} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </Magnet>
                            </div>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}