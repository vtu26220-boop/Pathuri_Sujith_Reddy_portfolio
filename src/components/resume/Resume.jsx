import {
  FiEye,
  FiDownload,
  FiFileText,
} from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function Resume() {
  const { portfolioData } = usePortfolio();

  const profile =
    portfolioData?.profile || {};

  // Resume link updated from Admin Dashboard
  const resumeUrl =
    profile.resume || "";

  return (
    <section
      className="section resume-section"
      id="resume"
    >
      <div className="wide-container resume-layout">

        <div className="resume-content">

          <p className="small-heading">
            MY RESUME
          </p>

          <h2>
            Know more about my
            <span> journey.</span>
          </h2>

          <p>
            View my latest resume to learn about my
            education, technical skills, projects,
            and career interests.
          </p>

          <div className="resume-buttons">

            {resumeUrl ? (
              <>
                {/* View Resume */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiEye />
                  View Resume
                </a>

                {/* Download / Open Resume */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FiDownload />
                  Download Resume
                </a>
              </>
            ) : (
              <p>
                Resume is currently unavailable.
              </p>
            )}

          </div>

        </div>

        <div className="resume-card">

          <div className="resume-card-icon">
            <FiFileText />
          </div>

          <div>

            <p className="latest-resume">
              LATEST RESUME
            </p>

            <h3>
              {profile.name ||
                "Pathuri Sujith Reddy"}
            </h3>

            <p>
              {profile.title ||
                "Computer Science Student"}
            </p>

            <ul>
              <li>
                ✓ Education and academic details
              </li>

              <li>
                ✓ Technical skills and projects
              </li>

              <li>
                ✓ Contact details and professional links
              </li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;