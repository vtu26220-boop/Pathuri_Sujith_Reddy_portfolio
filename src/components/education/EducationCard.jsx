import { FiBookOpen } from "react-icons/fi";

function EducationCard({ education }) {
  return (
    <article className="education-card">

      <div className="education-icon">
        <FiBookOpen />
      </div>

      <div className="education-main">

        <h3>{education.title}</h3>

        <p className="education-subtitle">
          {education.subtitle}
        </p>

        <p className="education-institution">
          {education.institution}
        </p>

        <p className="education-location">
          {education.location}
        </p>

      </div>

      <div className="education-score">

        <span className="year-badge">
          {education.year}
        </span>

        <p>
          {education.scoreLabel}:{" "}
          <strong>{education.score}</strong>
        </p>

      </div>

    </article>
  );
}

export default EducationCard;