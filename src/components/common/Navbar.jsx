import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function Navbar() {
  const { portfolioData } = usePortfolio();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const profile =
    portfolioData?.profile || {};

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          {profile.shortName || "Sujith"}
          <span>.</span>
        </a>

        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#education"
            onClick={closeMenu}
          >
            Education
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#certificates"
            onClick={closeMenu}
          >
            Certificates
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            href="#contact"
            className="hire-btn"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
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