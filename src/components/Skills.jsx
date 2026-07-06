
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "C", "C++", "SQL", "Basics(HTML, CSS, JS)"]
    },
    {
        title: "Libraries & Frameworks",
        skills: ["Tkinter", "Pandas", "Numpy", "Django", "Flask", "Matplotlib"]
    },
    {
        title: "Concepts",
        skills: ["Machine Learning Fundamentals", "Data Structures and Algorithms"]
    },
    {
        title: "Tools & Platforms",
        skills: ["Git/Github", "Vibe coding platforms", "MS office", "Google Cloud Basics"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 border-b border-white/10 pb-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-[var(--color-primary)] rounded-full" />
                        Technical Skills
                    </h2>
                </motion.div>

                <div className="space-y-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group"
                        >
                            <h3 className="text-xl font-bold text-gray-200 min-w-[200px] shrink-0 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                {category.title}:
                            </h3>

                            <div className="flex flex-wrap gap-x-3 gap-y-2">
                                {category.skills.map((skill, i) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, color: "var(--color-white)" }}
                                        className="text-gray-400 text-lg leading-relaxed cursor-default hover:text-white transition-colors"
                                    >
                                        {skill}{i !== category.skills.length - 1 ? ',' : ''}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
