import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Education from "../components/sections/Education";
import Projects from "../components/sections/Projects";
import Research from "../components/sections/Research";
import Certifications from "../components/sections/Certifications";
import CodingProfiles from "../components/sections/CodingProfiles";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Certifications />
        <CodingProfiles />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default Home;