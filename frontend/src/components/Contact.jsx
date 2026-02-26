import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
            alert(response.data.message);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                        Get In <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto transition-colors duration-300">
                        Have a project in mind? Let's work together and build something great.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Contact Information</h3>
                        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">
                            <p><strong>Email:</strong> ashan@email.com</p>
                            <p><strong>Phone:</strong> +94 712345678</p>
                            <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-semibold mb-4 text-sm text-gray-900 dark:text-white transition-colors duration-300">Connect with me</h4>
                            <div className="flex space-x-4">
                                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white text-2xl transition transform hover:-translate-y-1"><FaGithub /></a>
                                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-2xl transition transform hover:-translate-y-1"><FaLinkedin /></a>
                                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-sky-500 text-2xl transition transform hover:-translate-y-1"><FaInstagram /></a>

                                <a
                                    href="mailto:ashan2003work@gmail.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 text-2xl transition transform hover:-translate-y-1"
                                    title="Send Email"
                                >
                                    <FaEnvelope />
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white transition-colors duration-300">Send a Message</h3>

                        <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 outline-none transition"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 outline-none transition"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 outline-none transition"
                                required
                            />

                            <textarea
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500 outline-none resize-none transition"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
