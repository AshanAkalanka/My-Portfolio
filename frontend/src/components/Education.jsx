import { motion } from "framer-motion";
import { FaGraduationCap, FaReact, FaCode, FaDatabase } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { PiCertificateBold } from "react-icons/pi";
import { SiJavascript, SiPython, SiTensorflow } from "react-icons/si";

function Education() {
    const educationList = [
        {
            icon: <HiAcademicCap className="text-xl text-green-600" />,
            title: "BSc (Hons) in Information Technology – Artificial Intelligence",
            institute: "SLIIT – Sri Lanka Institute of Information Technology",
            period: "2024 – Present",
            points: ["Focused on Artificial Intelligence and Fullstack Web Development"],
        },
        {
            icon: <PiCertificateBold className="text-xl text-green-600" />,
            title: "G.C.E Advanced Level (A/L)",
            institute: "",
            period: "",
            points: ["Result: 2 C & 1 S"],
        },
        {
            icon: <FaGraduationCap className="text-xl text-green-600" />,
            title: "Certificates and other qualifications",
            institute: "",
            period: "",
            points: ["visit my LinkedIn profile......"],
        },
    ];

    const bgIcons = [
        FaReact,
        FaCode,
        FaDatabase,
        SiJavascript,
        SiPython,
        SiTensorflow,
    ];

    return (
        <section
            id="education"
            className="relative bg-white dark:bg-gray-900 py-16 scroll-mt-28 overflow-hidden transition-colors duration-300"
        >
            {/* 🌿 FAST MOVING SMALL TECH ICONS */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(55)].map((_, i) => {
                    const Icon = bgIcons[i % bgIcons.length];

                    const top = (i * 17) % 100;
                    const left = (i * 29) % 100;

                    return (
                        <motion.div
                            key={i}
                            className="absolute text-emerald-500/20 dark:text-emerald-400/15"
                            style={{
                                top: `${top}%`,
                                left: `${left}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={{
                                y: [0, -18, 0],
                                x: [0, i % 2 === 0 ? 18 : -18, 0],
                                rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                            }}
                            transition={{
                                duration: 5 + (i % 4),
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <Icon className="text-[14px] md:text-[16px]" />
                        </motion.div>
                    );
                })}
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                        className="lg:pr-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                            My Journey
                        </h2>

                        <p className="mt-5 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            My studies have helped me build a strong foundation in software development and
                            problem-solving. I enjoy learning how systems work and turning ideas into clean,
                            practical applications.
                        </p>

                        <p className="mt-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            Along the way, I've improved my skills in programming, database design, and web
                            technologies while exploring Artificial Intelligence concepts through coursework
                            and small projects.
                        </p>

                        <p className="mt-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                            I am continuously expanding my technical knowledge by experimenting with different technologies, refining my coding practices,
                            and learning from real-world project experiences.
                            My goal is to build a portfolio that highlights steady growth, meaningful learning, and the ability to adapt and improve over time.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-4">
                        {educationList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                viewport={{ once: true }}
                                className="bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-sm rounded-xl p-4 md:p-5 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-11 h-11 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0">
                                        {item.icon}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-[15px] md:text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                                            {item.title}
                                        </h3>

                                        {item.institute && (
                                            <p className="text-[13px] text-gray-700 dark:text-gray-300 mt-1 transition-colors duration-300">
                                                {item.institute}
                                            </p>
                                        )}

                                        {item.period && (
                                            <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                                                {item.period}
                                            </p>
                                        )}

                                        {item.points?.length > 0 && (
                                            <ul className="mt-3 space-y-2 text-[13px] text-gray-700 dark:text-gray-300">
                                                {item.points.map((p, i) => (
                                                    <li key={i} className="flex gap-2">
                                                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                        <span>{p}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
