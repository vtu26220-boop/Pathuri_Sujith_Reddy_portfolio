function SectionTitle({
  firstText,
  highlightText,
  subtitle,
}) {
  return (
    <div className="section-heading">
      <h2>
        {firstText} <span>{highlightText}</span>
      </h2>

      <div className="heading-line" />

      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;