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

  const profile = portfolioData?.profile || {};

  const nameParts = profile.name
    ? profile.name.split(" ")
    : [];

  const firstName =
    nameParts[0] || "Pathuri";

  const restOfName =
    nameParts.slice(1).join(" ") ||
    "Sujith Reddy";

  const emailAddress =
    profile.email ||
    "pathurisujithreddy2005@gmail.com";

  // Correct resume URL for GitHub Pages
  const resumeUrl =
    `${import.meta.env.BASE_URL}resume/sujith-reddy-resume.pdf`;

  // Scroll to portfolio sections without changing HashRouter route
  const scrollToSection = (sectionId) => {
    const section =
      document.getElementById(sectionId);

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

        <p className="hero-welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1 className="hero-name">
          {firstName}{" "}
          <span>{restOfName}</span>
        </h1>

        <h2 className="hero-role">
          {profile.title}

          <span className="divider">
            |
          </span>

          {profile.role}
        </h2>

        <p className="hero-description">
          {profile.description}
        </p>

        <div className="hero-buttons">

          {/* View Projects */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              scrollToSection("projects")
            }
          >
            View Projects
          </button>

          {/* View Resume */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            View Resume
          </a>

          {/* Contact Me */}
          <button
            type="button"
            className="btn btn-outline"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact Me
          </button>

        </div>

        <div className="hero-socials">

          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub />
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          )}

          {profile.leetcode && (
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          )}

          {profile.hackerrank && (
            <a
              href={profile.hackerrank}
              target="_blank"
              rel="noreferrer"
              aria-label="HackerRank"
              title="HackerRank"
            >
              <SiHackerrank />
            </a>
          )}

          <a
            href={`mailto:${emailAddress}`}
            aria-label="Send Email"
            title="Send Email"
          >
            <FiMail />
          </a>

        </div>

        {/* Scroll to About */}
        <button
          type="button"
          className="scroll-explore"
          onClick={() =>
            scrollToSection("about")
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