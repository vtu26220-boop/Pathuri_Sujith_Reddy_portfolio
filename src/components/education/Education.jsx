import EducationCard from "./EducationCard";
import usePortfolio from "../../hooks/usePortfolio";

function Education() {
  const { portfolioData } = usePortfolio();

  const educationData =
    portfolioData?.education || [];

  return (
    <section
      className="section education-section"
      id="education"
    >
      <div className="section-container">

        <div className="section-heading">
          <h2>
            My <span>Education</span>
          </h2>

          <div className="heading-line"></div>
        </div>

        <div className="education-list">

          {educationData.length > 0 ? (
            educationData.map(
              (education, index) => (
                <EducationCard
                  key={
                    education.id ||
                    index
                  }
                  education={education}
                />
              )
            )
          ) : (
            <p>
              No education details added yet.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

export default Education;