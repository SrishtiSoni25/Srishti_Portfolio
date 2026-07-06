import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, Send, BrainCircuit, Instagram } from 'lucide-react';

const SocialIcon = ({ Icon, href, label }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-[var(--color-bg-card)] border border-white/10 rounded-xl hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_15px_var(--color-primary)]"
            whileHover={{ y: -5 }}
        >
            <Icon size={24} className="text-gray-400 group-hover:text-[var(--color-primary)] transition-colors" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </span>
        </motion.a>
    );
};

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Standard HTML Form submission logic
    // This uses the browser's native submission to ensure the FormSubmit.co activation flow works correctly.
    const handleSubmit = () => {
        // We don't preventDefault() here because we WANT the form to submit naturally
        // to FormSubmit's server for the first-time activation redirect.
        setIsSubmitting(true);
    };

    return (
        <section id="contact" className="py-32 px-6 relative z-10 bg-[var(--color-bg-dark)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

                {/* Left Column: Info & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <BrainCircuit size={24} className="text-[var(--color-primary)]" />
                        <span className="font-mono text-[var(--color-primary)] uppercase tracking-widest">
                            Initialize Connection
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">COLLABORATE</span>
                    </h2>

                    <div className="space-y-4 mb-8 text-gray-400">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                            <span>+91-9142922165</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                            <span>Kehri Gaon, Prem Nagar, Dehradun, Uttarakhand, India</span>
                        </div>
                    </div>

                    <div className="flex gap-6 mb-12">
                        <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/aditya-kumari-1890b6252" label="LinkedIn" />
                        {/* <SocialIcon Icon={Github} href="https://github.com/Chinmayjoshi2005" label="GitHub" />
                        <SocialIcon Icon={Twitter} href="https://x.com/Srishti" label="Twitter" />
                        <SocialIcon Icon={Instagram} href="https://www.instagram.com/srishti/" label="Instagram" /> */}
                        <SocialIcon Icon={Mail} href="mailto:srishtisoni2502@gmail.com" label="Email" />
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-[var(--color-primary)]/5 blur-3xl rounded-full -z-10" />

                    {/* Native HTML Form to robustly trigger FormSubmit.co */}
                    <form
                        action="https://formsubmit.co/srishtisoni2502@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="p-8 rounded-3xl bg-[var(--color-bg-card)]/50 border border-white/10 backdrop-blur-xl hover:border-[var(--color-primary)]/30 transition-colors relative overflow-hidden"
                    >

                        {/* FormSubmit Configuration - Hidden Fields */}
                        <input type="hidden" name="_subject" value="New Portfolio Message!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <input type="text" name="_honey" style={{ display: 'none' }} />
                        {/* Redirect back to the portfolio after submission */}
                        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin : ''} />

                        <div className="space-y-6 mt-4">
                            <div>
                                <label className="block text-xs font-mono text-[var(--color-primary)] uppercase tracking-widest mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name" // Must match standard name attribute for FormSubmit
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-white/20"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-[var(--color-primary)] uppercase tracking-widest mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-white/20"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-[var(--color-primary)] uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-white/20 resize-none"
                                    placeholder="Project details..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] disabled:bg-gray-600 text-black hover:text-white rounded-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.6)] disabled:shadow-none disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Redirecting...' : (
                                    <>
                                        Transmit Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
