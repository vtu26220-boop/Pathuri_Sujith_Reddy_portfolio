import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function SocialIcons() {
  return (
    <div className="hero-socials">
      <a
        href="https://github.com/vtu26220-boop"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/pathuri-sujith-reddy-30a634285/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin />
      </a>

      <a
        href="mailto:pathurirajitha2@gmail.com"
        aria-label="Email"
      >
        <FiMail />
      </a>
    </div>
  );
}

export default SocialIcons;