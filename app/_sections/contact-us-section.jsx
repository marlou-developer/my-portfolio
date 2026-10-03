'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaCopy, FaCheck, FaSpinner } from 'react-icons/fa';
import { send_contact_service } from '@/app/services/send-contact';

export default function ContactUsSection() {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Values used inside the HTML email template
    const [activeTab, setActiveTab] = useState('Web Development');
    const [budget, setBudget] = useState('Flexible / Undefined');

    const emailAddress = "marlou.developer@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        const htmlBody = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Notification</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f5f7; padding: 40px 10px;">
                <tr>
                    <td align="center">
                        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width: 600px; width: 100%;">
                            
                            <!-- Purple Header Banner -->
                            <tr>
                                <td style="background-color: #6b21a8; padding: 40px 20px; text-align: center;">
                              
                                 
                                    
                                    <!-- Header Title -->
                                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                        New Inquiry Received! 🎊
                                    </h1>
                                </td>
                            </tr>

                            <!-- Body Content -->
                            <tr>
                                <td style="padding: 40px 36px; color: #334155; font-size: 15px; line-height: 1.6;">
                                    <p style="margin-top: 0; margin-bottom: 16px;">
                                        This is an automated notification to inform you that <strong style="color: #0f172a;">${formState.name}</strong> (${formState.email}) has sent an inquiry regarding <strong style="color: #0f172a;">${activeTab}</strong> with an estimated budget of <strong style="color: #0f172a;">${budget}</strong>.
                                    </p>
                                    
                                    <p style="margin-top: 0; margin-bottom: 16px;">
                                        The submitter left the following message via your portfolio contact section:
                                    </p>

                                    <!-- Quote/Message Box -->
                                    <div style="background-color: #f8fafc; border-left: 4px solid #6b21a8; padding: 16px; border-radius: 6px; margin-bottom: 24px; color: #475569; font-style: italic;">
                                        "${formState.message}"
                                    </div>

                                    <p style="margin-top: 0; margin-bottom: 28px;">
                                        To reply directly to the sender, please click the button below:
                                    </p>

                                    <!-- Call-to-Action Button -->
                                    <div style="text-align: center; margin-bottom: 12px;">
                                        <a href="mailto:${formState.email}?subject=Re: ${encodeURIComponent(activeTab)} Inquiry" 
                                           style="background-color: #4f46e5; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);">
                                            Reply to ${formState.name}
                                        </a>
                                    </div>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="padding: 0 36px 32px 36px; text-align: center; color: #94a3b8; font-size: 12px;">
                                    Sent with ❤️ from the Portfolio Team
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;

        try {
            await send_contact_service({
                recipient: emailAddress,
                bcc: 'eogs.marlou@gmail.com',
                subject: `New Inquiry from ${formState.name}`,
                body: htmlBody,
            });

            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitted(false);
            }, 4000);
        } catch (error) {
            console.error("Failed to send message:", error);
            setErrorMsg("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                                    type="button"
                                    className="flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-purple-500/50 transition-all w-fit cursor-pointer"
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

                            {/* Error Alert */}
                            {errorMsg && (
                                <p className="text-red-400 text-sm font-medium">{errorMsg}</p>
                            )}

                            {/* Submit Button wrapped in Magnet */}
                            <div className="mt-2">
                                <Magnet padding={12}>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || submitted}
                                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FaSpinner className="animate-spin" size={16} /> Sending...
                                            </>
                                        ) : submitted ? (
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