import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiOutlineArrowUp } from "react-icons/hi";
import project1 from "../images/a1.jpg";
import project2 from "../images/p.jpg";
import project3 from "../images/g.jpg";
import project4 from "../images/Weather_app.png";

const allProjects = [
    {
        title: "Expenses Tracker",
        description:
            "Web app to record, manage, and monitor daily, weekly, and monthly expenses.",
        tech: ["Java", "React", "Node.js", "MySQL"],
        image: project1,
        github: "https://github.com/",
        video: "https://youtube.com/",
    },
    {
        title: "My Portfolio",
        description: "Personal portfolio showcasing projects, skills, and achievements.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        image: project2,
        github: "https://github.com/",
        video: "https://youtube.com/",
    },
    {
        title: "Event Management System",
        description: "Complete system for planning, organizing, and managing events.",
        tech: ["Java Spring Boot", "HTML", "CSS", "JavaScript"],
        image: project3,
        github: "https://github.com/",
        video: "https://youtube.com/",
    },
    {
        title: "Weather App",
        description: "A modern weather application that provides real-time weather updates, hourly forecasts, and 7-day prediction.",
        tech: ["React", "HTML", "CSS", "Node.js"],
        image: project4,
        github: "https://github.com/",
        video: "https://youtube.com/",
    },
];

function SocialIcon({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-gray-800 dark:bg-gray-700 text-white
                 flex items-center justify-center hover:scale-110 transition"
        >
            {children}
        </a>
    );
}

function Allprojects() {
    return (
        <>
            {/* PROJECTS SECTION */}
            <section
                id="projects"
                className="min-h-screen pt-28 pb-16
                   bg-gradient-to-r from-blue-100 via-white to-amber-100
                   dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
                   transition-colors duration-300"
            >
                <div className="max-w-6xl mx-auto px-4">
                    {/* HEADER */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white relative inline-block transition-colors duration-300">
                            All <span className="text-blue-600 dark:text-blue-400">Projects</span>
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto text-base transition-colors duration-300">
                            A collection of my academic, personal, and full-stack projects.
                        </p>
                    </div>

                    {/* PROJECT GRID */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {allProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, delay: index * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg border border-transparent dark:border-gray-700 transition-colors duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-44 w-full object-cover rounded-t-2xl"
                                />

                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">{project.description}</p>

                                    {/* TECH STACK */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* LINKS */}
                                    <div className="flex gap-6 mt-5">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
                                        >
                                            View GitHub Project →
                                        </a>

                                        <a
                                            href={project.video}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
                                        >
                                            Video Demo →
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* GITHUB CTA */}
                    <div className="flex justify-center mt-14">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 bg-gray-900 dark:bg-gray-700 text-white
                         px-10 py-4 rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition"
                        >
                            <FaGithub />
                            See All My Projects on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* LET'S CONNECT SECTION (BEFORE FOOTER) */}
            <section className="bg-[#fbf3e4] dark:bg-gray-900 py-16 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6">

                    {/* TOP */}
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* LEFT */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300">
                                Let&apos;s Connect!
                            </h2>

                            <p className="text-gray-700 dark:text-gray-300 mt-3 max-w-lg text-base leading-relaxed transition-colors duration-300">
                                I&apos;m currently open to new opportunities and collaborations.
                                Feel free to reach out!
                            </p>

                            <a
                                href="/"
                                className="inline-flex items-center gap-2 mt-6
                           bg-blue-600 text-white px-6 py-3 rounded-full
                           text-sm font-semibold shadow hover:bg-blue-700 transition"
                            >
                                <FiMail />
                                Contact Me
                            </a>
                        </div>

                        {/* RIGHT */}
                        <div className="flex flex-col items-start md:items-end gap-6">
                            <div className="flex gap-4">
                                <SocialIcon href="https://github.com">
                                    <FaGithub />
                                </SocialIcon>
                                <SocialIcon href="https://linkedin.com">
                                    <FaLinkedinIn />
                                </SocialIcon>
                                <SocialIcon href="https://instagram.com">
                                    <FaInstagram />
                                </SocialIcon>
                                <SocialIcon href="https://facebook.com">
                                    <FaFacebookF />
                                </SocialIcon>
                            </div>

                            <a
                                href=" "
                                className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-300 hover:underline transition-colors duration-300"
                            >
                                Back to top <HiOutlineArrowUp />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Allprojects;
