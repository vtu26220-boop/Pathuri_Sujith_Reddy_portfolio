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
    "pathurisujithreddy2005@gmail.com";

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

          <a
            href="#projects"
            className="btn btn-primary"
          >
            View Projects
          </a>

          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              View Resume
            </a>
          )}

          <a
            href="#contact"
            className="btn btn-outline"
          >
            Contact Me
          </a>

        </div>

        <div className="hero-socials">

          {/* GitHub */}
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

          {/* LinkedIn */}
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

          {/* LeetCode */}
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

          {/* HackerRank */}
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

          {/* Email */}
          <a
            href={`mailto:${emailAddress}`}
            aria-label="Send Email"
            title="Send Email"
          >
            <FiMail />
          </a>

        </div>

        <a
          href="#about"
          className="scroll-explore"
        >
          Scroll to explore
          <FiArrowDown />
        </a>

      </div>
    </section>
  );
}

export default Hero;