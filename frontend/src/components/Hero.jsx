import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import profile from "../images/photo.jpeg";

/* TYPEWRITER */
function Typewriter({ words, speed = 120, delay = 1600 }) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const { isDark } = useTheme();

    useEffect(() => {
        const current = words[index];
        let timer;

        if (!deleting && text.length < current.length) {
            timer = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
        } else if (deleting && text.length > 0) {
            timer = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
        } else if (!deleting && text.length === current.length) {
            timer = setTimeout(() => setDeleting(true), delay);
        } else if (deleting && text.length === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [text, deleting, index, words, speed, delay]);

    return (
        <span className={`border-r-4 pr-2 animate-pulse ${isDark ? "border-blue-400" : "border-black"}`}>
            {text}
        </span>
    );
}

/* PARTICLES  */
function OrbitParticles({ count = 18 }) {
    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            const size = 3 + Math.floor(Math.random() * 6);
            const radius = 120 + Math.floor(Math.random() * 55);
            const duration = 3 + Math.random() * 5;
            const delay = Math.random() * 1.5;
            const opacity = 0.35 + Math.random() * 0.55;
            const hue = i % 3;
            return { i, size, radius, duration, delay, opacity, hue };
        });
    }, [count]);

    return (
        <div className="hero-particles" aria-hidden="true">
            {particles.map((p) => (
                <span
                    key={p.i}
                    className={`particle particle-${p.hue}`}
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        transform: `translate(-50%, -50%) rotate(${p.i * (360 / count)}deg) translateX(${p.radius}px)`,
                    }}
                />
            ))}
        </div>
    );
}

/* HERO */
function Hero() {
    return (
        <section
            id="home"
            className="
        min-h-screen flex items-center px-16
        bg-gradient-to-r
        from-blue-100 via-white to-amber-100
        dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
        transition-colors duration-300
      "
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                {/* LEFT */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3"
                    >
                        Hi, I am
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-6xl font-extrabold text-black dark:text-white leading-tight transition-colors duration-300"
                    >
                        <Typewriter words={["Ashan Akalanka", "Ashan Akalanka", "Ashan Akalanka"]} />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl transition-colors duration-300"
                    >
                        I am an Artificial Intelligence undergraduate passionate about building smart solutions
                        using data and algorithms. I enjoy working on AI and software projects, learning new
                        tools, and transforming ideas into meaningful digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-8 flex gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/resume.pdf"
                            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
                        {/* thin animated ring */}
                        <div className="hero-ring" />

                        {/* moving particles */}
                        <OrbitParticles count={20} />

                        {/* BIG PHOTO */}
                        <img
                            src={profile}
                            alt="Profile"
                            className="relative w-[340px] h-[340px] rounded-full object-cover z-[3]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;