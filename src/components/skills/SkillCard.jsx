function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <h3>{skill.name}</h3>
        <span>{skill.level}%</span>
      </div>

      <div className="skill-progress">
        <div
          className="skill-progress-value"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillCard;