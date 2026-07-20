import { useState } from "react";

import {
  FiPlus,
  FiLink,
  FiX,
} from "react-icons/fi";

function CertificateForm({
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    link: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    const issuer = formData.issuer.trim();
    const date = formData.date.trim();
    const link = formData.link.trim();

    if (!title || !issuer) {
      alert(
        "Please enter certificate name and issuer."
      );
      return;
    }

    if (!link) {
      alert(
        "Please enter the certificate link."
      );
      return;
    }

    try {
      new URL(link);
    } catch {
      alert(
        "Please enter a valid certificate link."
      );
      return;
    }

    onSubmit({
      title,
      issuer,
      date,
      link,
    });

    setFormData({
      title: "",
      issuer: "",
      date: "",
      link: "",
    });
  };

  return (
    <form
      className="admin-panel admin-form"
      onSubmit={handleSubmit}
    >
      <h2>
        Add New Certificate
      </h2>

      <div className="admin-form-grid">

        {/* Certificate Name */}
        <div className="admin-form-group">
          <label htmlFor="certificateTitle">
            Certificate Name
          </label>

          <input
            id="certificateTitle"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Example: Introduction to Data Analytics"
            required
          />
        </div>

        {/* Issuer */}
        <div className="admin-form-group">
          <label htmlFor="certificateIssuer">
            Issuer
          </label>

          <input
            id="certificateIssuer"
            type="text"
            name="issuer"
            value={formData.issuer}
            onChange={handleChange}
            placeholder="Example: Simplilearn SkillUp"
            required
          />
        </div>

        {/* Issued Date */}
        <div className="admin-form-group">
          <label htmlFor="certificateDate">
            Issued Date
          </label>

          <input
            id="certificateDate"
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Example: June 2026"
          />
        </div>

        {/* Certificate Link */}
        <div className="admin-form-group">
          <label htmlFor="certificateLink">
            Certificate Link
          </label>

          <div className="admin-input-wrapper">
            <FiLink />

            <input
              id="certificateLink"
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
              required
            />
          </div>

          <p className="admin-muted">
            Paste a public Google Drive or certificate URL.
          </p>
        </div>

      </div>

      <div className="admin-card-actions">

        {/* Add Certificate */}
        <button
          type="submit"
          className="admin-button"
        >
          <FiPlus />
          Add Certificate
        </button>

        {/* Cancel */}
        {onCancel && (
          <button
            type="button"
            className="admin-edit-button"
            onClick={onCancel}
          >
            <FiX />
            Cancel
          </button>
        )}

      </div>
    </form>
  );
}

export default CertificateForm;