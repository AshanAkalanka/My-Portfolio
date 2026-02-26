import Hero from "../components/Hero";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
    return (
        <div id="home">
            <Hero />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;
