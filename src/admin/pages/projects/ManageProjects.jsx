import { useState } from "react";

import {
  FiEdit2,
  FiGithub,
  FiExternalLink,
  FiPlus,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";
import ProjectForm from "./ProjectForm";

function ManageProjects() {
  const {
    portfolioData,
    setProjects,
  } = usePortfolio();

  const [showForm, setShowForm] =
    useState(false);

  const [editingProject, setEditingProject] =
    useState(null);

  const addProject = (project) => {
    setProjects([
      ...portfolioData.projects,
      {
        ...project,
        id: Date.now(),
      },
    ]);

    setShowForm(false);
  };

  const updateProject = (updatedProject) => {
    setProjects(
      portfolioData.projects.map(
        (project) =>
          project.id ===
          editingProject.id
            ? {
                ...updatedProject,
                id: editingProject.id,
              }
            : project
      )
    );

    setEditingProject(null);
  };

  const deleteProject = (id) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this project?"
      );

    if (!confirmed) return;

    setProjects(
      portfolioData.projects.filter(
        (project) =>
          project.id !== id
      )
    );
  };

  return (
    <section>
      <div className="admin-page-header admin-header-row">
        <div>
          <h1>Manage Projects</h1>

          <p>
            Add projects with GitHub and
            live demo links.
          </p>
        </div>

        <button
          className="admin-button"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          {showForm ? <FiX /> : <FiPlus />}

          {showForm
            ? "Cancel"
            : "Add Project"}
        </button>
      </div>

      {showForm && (
        <div className="admin-bottom-space">
          <ProjectForm
            onSubmit={addProject}
            buttonText="Add Project"
          />
        </div>
      )}

      {editingProject && (
        <div className="admin-bottom-space">
          <ProjectForm
            key={editingProject.id}
            initialProject={
              editingProject
            }
            onSubmit={updateProject}
            buttonText="Update Project"
          />
        </div>
      )}

      <div className="admin-project-grid">
        {portfolioData.projects.map(
          (project) => (
            <article
              className="admin-project-card"
              key={project.id}
            >
              {project.featured && (
                <span className="admin-featured">
                  Featured
                </span>
              )}

              <h3>{project.title}</h3>

              <p>
                {project.description}
              </p>

              <div className="admin-tech-list">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="admin-project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiExternalLink />
                    Demo
                  </a>
                )}
              </div>

              <div className="admin-card-actions">
                <button
                  className="admin-edit-button"
                  onClick={() => {
                    setShowForm(false);

                    setEditingProject(
                      project
                    );
                  }}
                >
                  <FiEdit2 />
                  Edit
                </button>

                <button
                  className="admin-delete-button"
                  onClick={() =>
                    deleteProject(
                      project.id
                    )
                  }
                >
                  <FiTrash2 />
                  Delete
                </button>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
}

export default ManageProjects;