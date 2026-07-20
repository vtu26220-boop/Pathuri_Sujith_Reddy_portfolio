import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function ContactInfo() {
  const { portfolioData } = usePortfolio();

  const profile = portfolioData?.profile || {};

  const items = [
    {
      icon: <FiMail />,
      label: "Email",
      value: profile.email || "Not added",
      link: profile.email
        ? `mailto:${profile.email}`
        : null,
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: profile.phone || "Not added",
      link: profile.phone
        ? `tel:${profile.phone.replace(/\s/g, "")}`
        : null,
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: profile.location || "Not added",
      link: null,
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: profile.github
        ? profile.github
            .replace("https://github.com/", "")
            .replace(/\/$/, "")
        : "Not added",
      link: profile.github || null,
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: profile.linkedin
        ? profile.linkedin
            .replace("https://www.linkedin.com/in/", "")
            .replace("https://linkedin.com/in/", "")
            .replace(/\/$/, "")
        : "Not added",
      link: profile.linkedin || null,
    },
  ];

  return (
    <div className="contact-info">
      <h3>Let's connect</h3>

      {items.map((item) => (
        <div
          className="contact-info-card"
          key={item.label}
        >
          <div className="contact-info-icon">
            {item.icon}
          </div>

          <div>
            <span>{item.label}</span>

            {item.link ? (
              <a
                href={item.link}
                target={
                  item.label === "GitHub" ||
                  item.label === "LinkedIn"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "GitHub" ||
                  item.label === "LinkedIn"
                    ? "noreferrer"
                    : undefined
                }
              >
                <strong>{item.value}</strong>
              </a>
            ) : (
              <strong>{item.value}</strong>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;