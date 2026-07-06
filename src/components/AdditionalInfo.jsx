import React from 'react';
import { motion } from 'framer-motion';

const AdditionalInfo = () => {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 border-b border-white/10 pb-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                        <span className="w-1.5 h-8 bg-[var(--color-primary)] rounded-full" />
                        Additional Information
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {[
                        { label: "Languages:", value: "Hindi (Native), English." },
                        // { label: "Affiliations:", value: "Member and Team Leader at I.R.I.S Robotics Club, JIT." },
                        { label: "Achievements:", value: "Google Cloud Arcade Player 2025." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                            className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 p-4 rounded-lg transition-colors border border-transparent hover:border-white/5"
                        >
                            <span className="text-gray-200 font-bold min-w-[120px]">
                                {item.label}
                            </span>
                            <span className="text-gray-400">
                                {item.value}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdditionalInfo;
