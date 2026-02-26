import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiFigma,
    SiAdobephotoshop,
    SiJira,
} from "react-icons/si";

function Skills() {
    const filters = ["All Skills", "Development", "Design Tools", "Other Tools"];
    const skillsPerPage = 10;

    const skillsData = {
        "Main Skills": [
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind CSS", icon: <SiJavascript /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Git", icon: <SiGit /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "REST APIs", icon: <SiJavascript /> },
            { name: "Figma", icon: <SiFigma /> },
            { name: "Photoshop", icon: <SiAdobephotoshop /> },
            { name: "Jira", icon: <SiJira /> },
        ],
        Development: [
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Git", icon: <SiGit /> },
            { name: "Docker", icon: <SiDocker /> },
        ],
        "Design Tools": [
            { name: "Figma", icon: <SiFigma /> },
            { name: "Photoshop", icon: <SiAdobephotoshop /> },
        ],
        "Other Tools": [
            { name: "Jira", icon: <SiJira /> },
        ],
    };

    const [activeFilter, setActiveFilter] = useState("All Skills");
    const [page, setPage] = useState(0);

    // auto-slide pause on hover
    const [isHovered, setIsHovered] = useState(false);

    const skills =
        activeFilter === "All Skills"
            ? skillsData["Main Skills"]
            : skillsData[activeFilter] || [];
    const totalPages = Math.ceil(skills.length / skillsPerPage);

    const paginatedSkills = skills.slice(
        page * skillsPerPage,
        page * skillsPerPage + skillsPerPage
    );

    useEffect(() => {
        setPage(0);
    }, [activeFilter]);

    // ✅ AUTO SLIDE (every 3s) + pause on hover
    useEffect(() => {
        if (isHovered) return;
        if (totalPages <= 1) return;

        const interval = setInterval(() => {
            setPage((prev) => (prev + 1) % totalPages);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalPages, isHovered]);

    return (
        <motion.section
            id="skills"
            className="py-20 bg-gradient-to-b from-[#020617] to-[#0b1220] dark:from-[#010410] dark:to-[#060d1a] transition-colors duration-300"
            // ✅ first time load animation
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header (first load) */}
                <motion.h2
                    className="text-4xl font-bold text-center text-white mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    My <span className="text-yellow-400">Skills</span>
                </motion.h2>

                {/* Filters (first load) */}
                <motion.div
                    className="flex justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.2 }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter
                                    ? "bg-yellow-400 text-black"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid (pause auto-slide on hover) */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeFilter}-${page}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
                        >
                            {paginatedSkills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ y: -6, scale: 1.05 }}
                                    className="bg-[#0f172a] dark:bg-[#0a0f1e] rounded-2xl p-6 text-center border border-white/10 hover:border-yellow-400 transition"
                                >
                                    <div className="text-4xl text-blue-400 mb-3 flex justify-center">
                                        {skill.icon}
                                    </div>
                                    <p className="text-sm font-medium text-white">{skill.name}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrows */}
                    <button
                        onClick={() => setPage((p) => Math.max(p - 1, 0))}
                        disabled={page === 0}
                        className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-yellow-400 hover:text-black disabled:opacity-30"
                    >
                        ‹
                    </button>

                    <button
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                        disabled={page === totalPages - 1}
                        className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 border border-white/10 text-white hover:bg-yellow-400 hover:text-black disabled:opacity-30"
                    >
                        ›
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i)}
                            className={`w-2.5 h-2.5 rounded-full transition ${page === i ? "bg-yellow-400" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Skills;