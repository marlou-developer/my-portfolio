'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Magnet from '@/app/_components/Magnet';
import { Hexagon } from 'lucide-react';
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaFacebookF, 
  FaDribbble, 
  FaArrowUp 
} from 'react-icons/fa';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full pt-16 pb-12 bg-black/40 border-t border-white/10 z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <Magnet padding={10}>
              <a href="#hero" className="flex items-center gap-2 text-lg font-bold text-white tracking-widest uppercase">
                <Hexagon size={22} className="text-purple-400" />
                <span>MARLOU DEV</span>
              </a>
            </Magnet>
            <p className="text-gray-400 text-sm max-w-sm">
              Crafting interactive, high-performance web experiences that leave a lasting impression.
            </p>
          </div>

          {/* Quick Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <li key={link}>
                <Magnet padding={10}>
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

          {/* Back to Top Button */}
          <Magnet padding={12}>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all shadow-lg group"
            >
              <FaArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </Magnet>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          
          <p>© {currentYear} Marlou Dev. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[FaInstagram, FaDribbble, FaLinkedinIn, FaGithub, FaFacebookF].map((Icon, index) => (
              <Magnet key={index} padding={8}>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
                >
                  <Icon size={14} />
                </a>
              </Magnet>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}