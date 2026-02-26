import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import project1 from "../images/a1.jpg";
import project2 from "../images/p.jpg";
import project3 from "../images/g.jpg";

const projects = [
    {
        title: "Expenses Tracker",
        description:
            "Web application that helps users record, manage, and monitor monthly, weekly and daily expenses.",
        tech: ["Java", "React", "Node.js", "MySQL"],
        image: project1,
        link: "https://github.com/",
    },
    {
        title: "My Portfolio",
        description:
            "Built Product & Machinery Management module in a full-stack MERN enterprise app.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "MySQL"],
        image: project2,
        link: "https://github.com/",
    },
    {
        title: "Event Management System",
        description:
            "A web-based application designed to simplify the planning and management of events.",
        tech: ["Java Spring Boot", "HTML", "CSS", "JavaScript"],
        image: project3,
        link: "https://github.com/",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="py-20 bg-gradient-to-b from-[#0b1220] to-[#020617] dark:from-[#06080f] dark:to-[#010410] transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white">
                            Featured <span className="text-yellow-400">Projects</span>
                        </h2>
                        <p className="text-gray-400 mt-3 max-w-xl">
                            A selection of my recent work in UI design and full-stack development.
                        </p>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                        >
                            View All Projects <FaArrowRight />
                        </Link>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-gray-600 text-gray-300 px-5 py-2 rounded-full hover:bg-gray-800 transition"
                        >
                            <FaGithub /> Projects on GitHub
                        </a>
                    </div>
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0f172a] dark:bg-[#0a0f1e] rounded-2xl shadow-lg min-h-[440px] flex flex-col transition-colors duration-300"
                        >
                            {/* Image */}
                            <div className="h-52 overflow-hidden rounded-t-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-2">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-200 border border-blue-500/30"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <div className="mt-auto pt-5">
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition"
                                    >
                                        View Project <FaArrowRight className="text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
