import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Certificates from "../components/certificates/Certificates";
import Contact from "../components/contact/Contact";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Portfolio;