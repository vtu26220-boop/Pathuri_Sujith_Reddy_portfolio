import { useEffect, useState } from "react";

import SkillTabs from "./SkillTabs";
import SkillCard from "./SkillCard";

import usePortfolio from "../../hooks/usePortfolio";

function Skills() {
  const { portfolioData } = usePortfolio();

  const skillData =
    portfolioData?.skills &&
    typeof portfolioData.skills === "object"
      ? portfolioData.skills
      : {};

  const categories = Object.keys(skillData).filter(
  (category) =>
    [
      "Programming",
      "Web Development",
      "Database",
      "Tools & Platforms",
    ].includes(category)
);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (categories.length === 0) {
      setActiveTab("");
      return;
    }

    if (
      !activeTab ||
      !categories.includes(activeTab)
    ) {
      setActiveTab(categories[0]);
    }
  }, [categories, activeTab]);

  const activeSkills =
    activeTab &&
    Array.isArray(skillData[activeTab])
      ? skillData[activeTab]
      : [];

  return (
    <section
      id="skills"
      className="skills-section"
    >
      <div className="container">

        <div className="section-heading">
          <h2>
            My <span>Skills</span>
          </h2>

          <div className="heading-line"></div>
        </div>

        {categories.length > 0 ? (
          <>
            <SkillTabs
              categories={categories}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="skills-grid">
              {activeSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="skills-empty">
            <p>No skills added yet.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;