import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

const icons = {
  Programming: <FiCode />,
  "Web Development": <FiLayout />,
  Database: <FiDatabase />,
  "Tools & Platforms": <FiTool />,
};

function SkillTabs({ categories, activeTab, setActiveTab }) {
  return (
    <div className="skill-tabs">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            activeTab === category
              ? "skill-tab active"
              : "skill-tab"
          }
          onClick={() => setActiveTab(category)}
        >
          {icons[category] || <FiCode />}
          {category}
        </button>
      ))}
    </div>
  );
}

export default SkillTabs;