import { FaMoon } from "react-icons/fa";
import { Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import avatar from "../images/n.png";

const navLinks = [
    { label: "Home", id: "home" },
    { label: "Education", id: "education" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
];

function Navbar() {
    const { isDark, setIsDark } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, id) => {
        e.preventDefault();

        if (location.pathname === "/") {
            // Already on home page — just smooth-scroll
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
            // On another page — navigate home, then scroll after render
            navigate("/");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 dark:bg-gray-900/70 border-b border-white/30 dark:border-gray-700/40 transition-colors duration-300">
            <div className="px-16 py-5 flex items-center justify-between">

                {/* LEFT: PHOTO + NAME */}
                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        alt="Ashan"
                        className="w-9 h-9 rounded-full object-cover border border-white/50"
                    />
                    <span
                        className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
                        style={{ fontFamily: "Caveat, cursive" }}
                    >
                        Ashan Akalanka
                    </span>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-8">

                    {/* NAV LINKS */}
                    <div className="flex gap-10 text-sm font-semibold text-blue-800 dark:text-blue-300">
                        {navLinks.map(({ label, id }) => (
                            <a
                                key={id}
                                href={`/#${id}`}
                                onClick={(e) => handleNavClick(e, id)}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* MODE TOGGLE BUTTON */}
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="w-9 h-9 rounded-full
                       flex items-center justify-center
                       bg-white/70 dark:bg-gray-700/80
                       border border-white/40 dark:border-gray-600/50
                       text-gray-800 dark:text-yellow-300
                       hover:scale-110 transition duration-300"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <FaMoon className="text-sm" />}
                    </button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
