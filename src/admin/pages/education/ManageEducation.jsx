import { useState } from "react";
import {
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

const emptyForm = {
  title: "",
  subtitle: "",
  institution: "",
  location: "",
  year: "",
  scoreLabel: "CGPA",
  score: "",
};

function ManageEducation() {
  const {
    portfolioData,
    setEducation,
  } = usePortfolio();

  const [form, setForm] =
    useState(emptyForm);

  const handleChange = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]:
        event.target.value,
    }));
  };

  const addEducation = (event) => {
    event.preventDefault();

    setEducation([
      ...portfolioData.education,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm(emptyForm);
  };

  const deleteEducation = (id) => {
    setEducation(
      portfolioData.education.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>Manage Education</h1>

        <p>
          Add and manage your academic details.
        </p>
      </div>

      <form
        className="admin-panel admin-form"
        onSubmit={addEducation}
      >
        <h2>Add Education</h2>

        <div className="admin-form-grid">
          {[
            ["title", "Course / Degree"],
            ["subtitle", "Specialization"],
            ["institution", "Institution"],
            ["location", "Location"],
            ["year", "Year"],
            ["scoreLabel", "Score Type"],
            ["score", "Score"],
          ].map(([name, label]) => (
            <div
              className="admin-form-group"
              key={name}
            >
              <label>{label}</label>

              <input
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </div>

        <button className="admin-button">
          <FiPlus />
          Add Education
        </button>
      </form>

      <div className="admin-section-space">
        {portfolioData.education.map(
          (education) => (
            <div
              className="admin-item-card admin-education-item"
              key={education.id}
            >
              <div>
                <h3>{education.title}</h3>

                <p>
                  {education.institution}
                </p>

                <span>
                  {education.year} •{" "}
                  {education.scoreLabel}:{" "}
                  {education.score}
                </span>
              </div>

              <button
                className="admin-delete-button"
                onClick={() =>
                  deleteEducation(
                    education.id
                  )
                }
              >
                <FiTrash2 />
              </button>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default ManageEducation;