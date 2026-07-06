import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[var(--color-primary)]/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-block"
                >
                    <div className="px-6 py-2 border border-[var(--color-primary)]/30 rounded-full bg-[var(--color-bg-card)]/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="font-mono text-sm text-[var(--color-primary)] tracking-[0.2em] uppercase font-bold">
                            System Online • Ready to Architect
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-white relative z-20"
                >
                    Srishti <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] relative">
                        Kumari
                        <motion.span
                            className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-50 blur-sm"
                            animate={{ opacity: [0.5, 1, 0.5], filter: ["blur(4px)", "blur(8px)", "blur(4px)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Kumari
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-10 mb-12"
                >
                    <p className="text-xl md:text-2xl text-gray-400 font-mono">
                        &lt; <span className="text-[var(--color-secondary)]">AI Engineer</span> /&gt;
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="px-8 py-4 bg-[var(--color-primary)] text-black font-bold rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all"
                    >
                        Initialize Contact
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/10 transition-all"
                    >
                        Explore Visuals
                    </motion.a>
                </div>
            </div>
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="text-[var(--color-primary)] text-[10px] font-mono tracking-widest uppercase animate-pulse">
                    Scroll to Initialize
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;

