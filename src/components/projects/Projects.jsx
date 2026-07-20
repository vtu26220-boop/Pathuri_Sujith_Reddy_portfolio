import ProjectCard from "./ProjectCard";
import usePortfolio from "../../hooks/usePortfolio";

function Projects() {
  const { portfolioData } = usePortfolio();

  const projects = portfolioData?.projects || [];

  return (
    <section
      className="section projects-section"
      id="projects"
    >
      <div className="wide-container">

        <div className="projects-heading">

          <p>MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <div className="heading-line"></div>

          <p className="projects-subtitle">
            A selection of projects I have built.
          </p>

        </div>

        <div className="projects-grid">

          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.id || index}
                project={project}
              />
            ))
          ) : (
            <p>No projects added yet.</p>
          )}

        </div>

      </div>
    </section>
  );
}

export default Projects;