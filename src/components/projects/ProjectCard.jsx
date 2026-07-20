import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      {project.featured && (
        <span className="featured-badge">
          Featured
        </span>
      )}

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="technology-list">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      {(project.github || project.demo) && (
        <div className="project-actions">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-code-btn"
            >
              <FiGithub />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-demo-btn"
            >
              <FiExternalLink />
              Demo
            </a>
          )}

        </div>
      )}

    </article>
  );
}

export default ProjectCard;