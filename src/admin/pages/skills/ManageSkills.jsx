import { useState } from "react";
import {
  FiPlus,
  FiTrash2,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

const categories = [
  "Programming",
  "Web Development",
  "Database",
  "Tools & Platforms",
];

function ManageSkills() {
  const {
    portfolioData,
    setSkills,
  } = usePortfolio();

  const [category, setCategory] =
    useState("Programming");

  const [name, setName] = useState("");
  const [level, setLevel] = useState(80);

  const skills =
    portfolioData?.skills || {};

  const addSkill = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      return;
    }

    const newSkill = {
      id: Date.now(),
      name: name.trim(),
      level: Number(level),
    };

    const updatedSkills = {
      ...skills,

      [category]: [
        ...(skills[category] || []),
        newSkill,
      ],
    };

    setSkills(updatedSkills);

    setName("");
    setLevel(80);
  };

  const deleteSkill = (
    categoryName,
    id
  ) => {
    const updatedSkills = {
      ...skills,

      [categoryName]: (
        skills[categoryName] || []
      ).filter(
        (skill) => skill.id !== id
      ),
    };

    setSkills(updatedSkills);
  };

  return (
    <section>
      <div className="admin-page-header">
        <div>
          <h1>Manage Skills</h1>

          <p>
            Add and remove your technical
            skills.
          </p>
        </div>
      </div>

      <form
        className="admin-panel admin-form"
        onSubmit={addSkill}
      >
        <h2>Add New Skill</h2>

        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label htmlFor="skillName">
              Skill Name
            </label>

            <input
              id="skillName"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Example: MongoDB"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="skillCategory">
              Category
            </label>

            <select
              id="skillCategory"
              value={category}
              onChange={(event) =>
                setCategory(
                  event.target.value
                )
              }
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-form-group">
            <label htmlFor="skillLevel">
              Proficiency: {level}%
            </label>

            <input
              id="skillLevel"
              type="range"
              min="0"
              max="100"
              value={level}
              onChange={(event) =>
                setLevel(
                  Number(
                    event.target.value
                  )
                )
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className="admin-button"
        >
          <FiPlus />
          Add Skill
        </button>
      </form>

      <div className="admin-section-space">
        {categories.map(
          (categoryName) => {
            const categorySkills =
              skills[categoryName] || [];

            return (
              <div
                className="admin-panel"
                key={categoryName}
              >
                <h2>{categoryName}</h2>

                {categorySkills.length > 0 ? (
                  <div className="admin-items-grid">
                    {categorySkills.map(
                      (skill) => (
                        <div
                          className="admin-item-card"
                          key={skill.id}
                        >
                          <div>
                            <strong>
                              {skill.name}
                            </strong>

                            <p>
                              {skill.level}%
                              proficiency
                            </p>
                          </div>

                          <button
                            type="button"
                            className="admin-delete-button"
                            onClick={() =>
                              deleteSkill(
                                categoryName,
                                skill.id
                              )
                            }
                            aria-label={`Delete ${skill.name}`}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <p>
                    No skills added in this
                    category.
                  </p>
                )}
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default ManageSkills;