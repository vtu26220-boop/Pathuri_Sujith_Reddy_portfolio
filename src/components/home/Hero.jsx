import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowDown,
} from "react-icons/fi";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

import usePortfolio from "../../hooks/usePortfolio";

function Hero() {
  const { portfolioData } = usePortfolio();

  const profile =
    portfolioData?.profile || {};

  /*
   * Split name
   */
  const nameParts = profile.name
    ? profile.name.split(" ")
    : [];

  const firstName =
    nameParts[0] || "Pathuri";

  const restOfName =
    nameParts.slice(1).join(" ") ||
    "Sujith Reddy";

  /*
   * Email from Admin / Firebase
   */
  const emailAddress =
    profile.email ||
    "pathurisujithreddy2005@gmail.com";

  /*
   * Resume link from Admin / Firebase
   *
   * When you update the resume link
   * from the Admin Dashboard,
   * this value will automatically change.
   */
  const resumeUrl =
    profile.resume || "";

  /*
   * Smooth scrolling
   *
   * This avoids HashRouter 404 errors.
   */
  const scrollToSection = (
    sectionId
  ) => {
    const section =
      document.getElementById(
        sectionId
      );

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="hero section"
      id="home"
    >
      <div className="hero-content">

        {/* Welcome Text */}
        <p className="hero-welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        {/* Name */}
        <h1 className="hero-name">
          {firstName}{" "}
          <span>
            {restOfName}
          </span>
        </h1>

        {/* Role */}
        <h2 className="hero-role">

          {profile.title ||
            "Computer Science Student"}

          <span className="divider">
            |
          </span>

          {profile.role ||
            "Full Stack Web Developer"}

        </h2>

        {/* Description */}
        <p className="hero-description">
          {profile.description ||
            "I build responsive, practical, and user-focused web applications using modern frontend and backend technologies."}
        </p>

        {/* Hero Buttons */}
        <div className="hero-buttons">

          {/* View Projects */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              scrollToSection(
                "projects"
              )
            }
          >
            View Projects
          </button>

          {/* View Resume */}
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Resume
            </a>
          )}

          {/* Contact Me */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() =>
              scrollToSection(
                "contact"
              )
            }
          >
            Contact Me
          </button>

        </div>

        {/* Social Links */}
        <div className="hero-socials">

          {/* GitHub */}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub />
            </a>
          )}

          {/* LinkedIn */}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          )}

          {/* LeetCode */}
          {profile.leetcode && (
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          )}

          {/* HackerRank */}
          {profile.hackerrank && (
            <a
              href={profile.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              title="HackerRank"
            >
              <SiHackerrank />
            </a>
          )}

          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            aria-label="Send Email"
            title="Send Email"
          >
            <FiMail />
          </a>

        </div>

        {/* Scroll To About */}
        <button
          type="button"
          className="scroll-explore"
          onClick={() =>
            scrollToSection(
              "about"
            )
          }
        >
          Scroll to explore

          <FiArrowDown />
        </button>

      </div>
    </section>
  );
}

export default Hero;