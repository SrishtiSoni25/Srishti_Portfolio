import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "LegalAid AI",
        category: "AI-Powered Legal Assistant",
        tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
        description:
            "An AI-powered legal assistance platform that provides legal guidance, document support, and multilingual assistance. Designed to make legal services more accessible through an intuitive and responsive web interface.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
        links: {
            demo: "#",
            github: "#"
        }
    },
    // {
    //     title: "Plant Disease Detection",
    //     category: "Machine Learning",
    //     tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    //     description:
    //         "Developed a deep learning model to identify plant diseases from leaf images using CNNs. The application helps farmers detect crop diseases early, improving productivity and reducing losses.",
    //     image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
    //     links: {
    //         demo: "#",
    //         github: "#"
    //     }
    
    {
        title: "Real Estate Web Platform",
        category: "Full Stack Development",
        tech: ["Angular", "TypeScript", "Firebase", "Bootstrap"],
        description:
            "Built a responsive real estate platform during my internship at Investor Home Solutions featuring dynamic property listings, reusable Angular components, and Firebase integration for seamless data management.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "Movie Recommendation System",
        category: "Machine Learning",
        tech: ["Python", "Streamlit", "Pandas", "TMDB API"],
        description:
            "Designed a content-based movie recommendation system that suggests similar movies using cosine similarity and TMDB API integration, delivered through an interactive Streamlit interface.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
        links: {
            demo: "#",
            github: "#"
        }
    }
];
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative grid md:grid-cols-12 gap-0 md:gap-8 items-center"
        >
            {/* Image Section */}
            <div className="md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl border border-white/5 group-hover:border-[var(--color-primary)]/30 transition-colors">
                <div className="absolute inset-0 bg-[var(--color-bg-dark)]/40 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content Section - Overlapping on Desktop */}
            <div className="md:col-span-12 md:absolute md:right-0 md:w-1/2 md:top-1/2 md:-translate-y-1/2 z-20 md:text-right mt-6 md:mt-0 px-4 md:px-0">
                <div className="p-6 md:p-8 bg-[var(--color-bg-card)]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl hover:border-[var(--color-primary)]/40 transition-colors">
                    <p className="font-mono text-xs text-[var(--color-primary)] mb-2 uppercase tracking-wider">
                        {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end mb-8">
                        {project.tech.map((tech) => (
                            <span key={tech} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 md:justify-end">
                        <a
                            href={project.links.demo}
                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-[var(--color-primary)] transition-colors"
                        >
                            <ExternalLink size={18} />
                            Live Demo
                        </a>
                        <a
                            href={project.links.github}
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={18} />
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 md:text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">WORKS</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Engineering solutions at the frontier of AI and application development.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 rounded-full text-sm font-mono uppercase tracking-widest text-white hover:bg-white/5 hover:border-[var(--color-primary)] transition-all duration-300"
                    >
                        View Full Archive <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
