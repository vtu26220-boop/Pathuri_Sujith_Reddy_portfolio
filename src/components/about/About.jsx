import {
  FiMonitor,
  FiServer,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function About() {
  const { portfolioData } = usePortfolio();

  const profile = portfolioData?.profile || {};

  return (
    <section
      className="section about-section"
      id="about"
    >
      <div className="section-container">

        <div className="section-heading">
          <h2>
            About <span>Me</span>
          </h2>

          <div className="heading-line"></div>
        </div>

        <div className="about-layout">

          <div className="about-image-wrapper">
            <img
              src={
                profile.profileImage ||
                "/images/profile/sujith-profile.png"
              }
              alt={
                profile.name ||
                "Pathuri Sujith Reddy"
              }
              className="about-image"
            />
          </div>

          <div className="about-content">

            <p>
              {profile.about ||
                "I am a Computer Science student and Full Stack Web Developer. I enjoy building modern web applications and solving real-world problems."}
            </p>

            <p>
              {profile.focus ||
                "My focus is on creating clean, practical, and accessible digital experiences while continuously improving my technical skills."}
            </p>

            <div className="about-cards">

              <div className="about-card">
                <FiMonitor />

                <h3>
                  Frontend Development
                </h3>

                <p>
                  HTML, CSS, JavaScript and
                  modern web interfaces
                </p>
              </div>

              <div className="about-card">
                <FiServer />

                <h3>
                  Backend Development
                </h3>

                <p>
                  Java, MySQL and application
                  development
                </p>
              </div>

              <div className="about-card">
                <FiBriefcase />

                <h3>
                  Open to Opportunities
                </h3>

                <p>
                  {profile.opportunity ||
                    "Internships and Entry-Level Positions"}
                </p>
              </div>

              <div className="about-card">
                <FiMapPin />

                <h3>Location</h3>

                <p>
                  {profile.location ||
                    "Siddipet, Telangana, India"}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;