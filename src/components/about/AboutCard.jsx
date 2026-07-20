function AboutCard({ icon, title, description }) {
  return (
    <div className="about-card">
      {icon}

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default AboutCard;