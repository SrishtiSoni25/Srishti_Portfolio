import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto space-y-20">

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[var(--color-primary)] rounded-full" />
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-12">
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-[var(--color-bg-card)]/30 p-6 rounded-xl border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                <h3 className="text-2xl font-bold text-white">Python Programming Intern</h3>
                                <div className="text-[var(--color-primary)] font-mono whitespace-nowrap">
                                    September 2025 – December 2025
                                </div>
                            </div>
                            <div className="text-lg text-gray-300 font-medium mb-4">
                                Web Developer (Internship)
                            </div>
                            <ul className="list-disc list-outside ml-5 text-gray-400 space-y-2 leading-relaxed">
                                <li>Completed a 1 month virtual internship focused on Python programming and problem solving.</li>
                                <li>Demonstrated strong analytical skills, quick learning ability, and adaptability to new technologies.</li>
                                <li>Collaborated effectively on assigned tasks and delivered consistent, quality outcomes.</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[var(--color-primary)] rounded-full" />
                            Education
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* College */}
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-[var(--color-bg-card)]/30 p-6 rounded-xl border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                <h3 className="text-xl md:text-2xl font-bold text-white max-w-2xl">
                                    Masters in Computer Application(Artificial Intelligence and Machine Learning)
                                </h3>
                                <div className="text-[var(--color-primary)] font-mono whitespace-nowrap mt-2 md:mt-0">
                                    2025 – 2027
                                </div>
                            </div>
                            <div className="text-lg text-gray-300 font-medium mb-2">
                                Uttaranchal University, Premnagar, Dehradun
                            </div>
                            <div className="text-gray-400">
                                Current CGPA: 8.23
                            </div>
                        </motion.div>

                        {/* 12th */}
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-[var(--color-bg-card)]/30 p-6 rounded-xl border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                <h3 className="text-xl font-bold text-white">
                                    Senior Secondary (Class XII), CBSE
                                </h3>
                                <div className="text-[var(--color-primary)] font-mono whitespace-nowrap">
                                    2021
                                </div>
                            </div>
                            <div className="text-lg text-gray-300 font-medium mb-2">
                                Camford Public School
                            </div>
                            <div className="text-gray-400">
                                Percentage: 78.8%
                            </div>
                        </motion.div>

                        {/* 10th */}
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="bg-[var(--color-bg-card)]/30 p-6 rounded-xl border border-white/5 hover:border-[var(--color-primary)]/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                <h3 className="text-xl font-bold text-white">
                                    Secondary (Class X), CBSE
                                </h3>
                                <div className="text-[var(--color-primary)] font-mono whitespace-nowrap">
                                    2019
                                </div>
                            </div>
                            <div className="text-lg text-gray-300 font-medium mb-2">
                                St.Lawrence Academy 
                            </div>
                            <div className="text-gray-400">
                                Percentage: 86.4%
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;
