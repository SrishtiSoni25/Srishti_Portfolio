import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Phone, Mail, Award, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 px-6 relative z-10 flex justify-center">
            <div className="max-w-5xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative bg-[var(--color-bg-card)]/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl overflow-hidden group"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Left: Bio & Status */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="p-3 bg-[var(--color-primary)]/10 rounded-xl text-[var(--color-primary)]">
                                    <User size={24} />
                                </span>
                                <h2 className="text-3xl font-bold text-white">Srishti kumari</h2>
                            </div>

                            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-light">
                                <span className="text-[var(--color-primary)] font-bold">Currently in 2nd year MCA CSE-AI/ML Engineering Student</span> at <span className="text-white font-medium">Uttaranchal University</span>.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                                    <Award size={16} className="text-[var(--color-secondary)]" />
                                    {/* <span className="text-sm text-gray-300">Age: 19</span> */}
                                </div>
                                <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2">
                                    <Terminal size={16} className="text-[var(--color-primary)]" />
                                    <span className="text-sm text-gray-300">AI Enthusiast</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 text-gray-400 group/item hover:text-white transition-colors cursor-default">
                                    <MapPin className="mt-1 shrink-0 text-[var(--color-primary)]" />
                                    <span>Kehri Gaon, Prem Nagar, Uttarakhand, India</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400 group/item hover:text-white transition-colors cursor-default">
                                    <Phone className="shrink-0 text-[var(--color-primary)]" />
                                    <span>+91-9142922165</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400 group/item hover:text-white transition-colors cursor-default">
                                    <Mail className="shrink-0 text-[var(--color-primary)]" />
                                    <span>srishtisoni2502@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Abstract Visual / Stats */}
                        <div className="relative h-full min-h-[300px] flex items-center justify-center bg-black/20 rounded-2xl border border-white/5 p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 rounded-2xl" />

                            <div className="grid grid-cols-1 gap-6 w-full">
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-2 border-[var(--color-primary)]">
                                    <span className="text-gray-400 text-sm">Experience</span>
                                    <span className="text-xl font-bold text-white">Internship (Web Developer)</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-2 border-[var(--color-secondary)]">
                                    <span className="text-gray-400 text-sm">Projects</span>
                                    <span className="text-xl font-bold text-white">2+ Major Projects</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border-l-2 border-white">
                                    <span className="text-gray-400 text-sm">Focus</span>
                                    <span className="text-xl font-bold text-white">AI / ML / Data Science</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
