import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function Navbar() {
  const { portfolioData } = usePortfolio();

  const [menuOpen, setMenuOpen] = useState(false);

  const profile = portfolioData?.profile || {};

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <button
          type="button"
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          {profile.shortName || "Sujith"}
          <span>.</span>
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("certificates")}
          >
            Certificates
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

          <button
            type="button"
            className="hire-btn"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </button>
        </nav>

        <button
          type="button"
          className="menu-button"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;