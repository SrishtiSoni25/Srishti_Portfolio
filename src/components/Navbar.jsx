import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-slate-800/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-cyan-500/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 border border-white/10 group-hover:border-[var(--color-primary)] transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_20px_var(--color-primary)]">
                        <BrainCircuit size={24} className="text-[var(--color-primary)]" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white group-hover:text-[var(--color-primary)] transition-colors font-display">
                        Srishti kumari
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="h-6 w-[1px] bg-white/10 mx-2" />

                    <div className="flex gap-4">
                        <a
                            href="/Chinmay_Joshi_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center gap-2"
                        >
                            <span>View Resume</span>
                        </a>
                        <a
                            href="/Chinmay_Joshi_Resume.pdf"
                            download
                            className="px-4 py-2 text-sm font-medium text-black bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(112,0,255,0.5)] flex items-center gap-2"
                        >
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-[1px] w-full bg-white/10 my-2" />
                            <a
                                href="/Chinmay_Joshi_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center py-2 border border-white/20 rounded text-white hover:bg-white/5 transition-colors"
                            >
                                View Resume
                            </a>
                            <a
                                href="/Chinmay_Joshi_Resume.pdf"
                                download
                                className="text-center py-2 bg-[var(--color-primary)] text-black rounded font-medium"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
