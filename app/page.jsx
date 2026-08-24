'use client';

import WebThreads from '@/app/_components/WebThreads';
import TopbarSection from '@/app/_sections/topbar-section';
import HeroSection from '@/app/_sections/hero-section';
import AboutUsSection from '@/app/_sections/about-us-section'
import ExperienceSection from '@/app/_sections/experience-section'
import ProjectSection from '@/app/_sections/project-section'
import ContactUsSection from '@/app/_sections/contact-us-section'
import FooterSection from '@/app/_sections/footer-section'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-gray-950 text-gray-100 selection:bg-purple-500">

            {/* ReactBits Background */}
            {/* Removed pointer-events-none so mouseInteraction actually works! */}
            <div className="fixed inset-0 z-0 opacity-40">
                <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                    <WebThreads
                        color1="#5227FF"
                        color2="#FF9FFC"
                        color3="#FFFFFF"
                        speed={0.2}
                        threadCount={6}
                        frequency={5}
                        spread={0.18}
                        taper={1}
                        position={0.5}
                        fanMode="center"
                        glow={0.02}
                        falloff={0.6}
                        thickness={1.1}
                        brightness={0.6}
                        opacity={1}
                        mirror
                        shimmer={false}
                        grain
                        grainIntensity={0.05}
                        mouseInteraction
                        mouseStrength={0.3}
                    />
                </div>
            </div>

            {/* Content sits above the background */}
            {/* Added pointer-events-none to the wrapper, but auto to children so we can click links but still interact with the background */}
            <div className="relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                    <TopbarSection />
                </div>

                <main className="px-3">
                    <HeroSection />
                    <AboutUsSection />
                    <ExperienceSection />
                    <ProjectSection />
                    <ContactUsSection />
                    <FooterSection />
                </main>
            </div>

            {/* Vignette overlay to darken edges so text pops */}
            <div className="fixed inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.8)_100%)]" />
        </div>
    );
}