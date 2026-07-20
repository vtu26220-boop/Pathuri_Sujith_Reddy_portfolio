import { useState } from "react";

const emptyProject = {
  title: "",
  description: "",
  technologies: "",
  github: "",
  demo: "",
  featured: true,
};

function ProjectForm({
  initialProject,
  onSubmit,
  buttonText = "Save Project",
}) {
  const [form, setForm] = useState(
    initialProject || emptyProject
  );

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    onSubmit({
      ...form,

      technologies:
        typeof form.technologies === "string"
          ? form.technologies
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
          : form.technologies,
    });

    if (!initialProject) {
      setForm(emptyProject);
    }
  };

  return (
    <form
      className="admin-panel admin-form"
      onSubmit={submitForm}
    >
      <div className="admin-form-grid">
        <div className="admin-form-group admin-full-field">
          <label>Project Title</label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-form-group admin-full-field">
          <label>Description</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <div className="admin-form-group admin-full-field">
          <label>
            Technologies
          </label>

          <input
            name="technologies"
            value={
              Array.isArray(
                form.technologies
              )
                ? form.technologies.join(
                    ", "
                  )
                : form.technologies
            }
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB"
          />

          <small>
            Separate technologies with commas.
          </small>
        </div>

        <div className="admin-form-group">
          <label>GitHub Link</label>

          <input
            type="url"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="https://github.com/..."
          />
        </div>

        <div className="admin-form-group">
          <label>Demo Link</label>

          <input
            type="url"
            name="demo"
            value={form.demo}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>

        <div className="admin-checkbox">
          <input
            id="featured"
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />

          <label htmlFor="featured">
            Featured Project
          </label>
        </div>
      </div>

      <button className="admin-button">
        {buttonText}
      </button>
    </form>
  );
}

export default ProjectForm;