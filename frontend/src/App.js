import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Allprojects from "./pages/Allprojects";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="flex flex-col min-h-screen dark:bg-gray-950 transition-colors duration-300">
                    <Navbar />

                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />

                            {/* Featured projects section (optional page route) */}
                            <Route path="/featured-projects" element={<Projects />} />

                            {/* View All Projects page */}
                            <Route path="/projects" element={<Allprojects />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
