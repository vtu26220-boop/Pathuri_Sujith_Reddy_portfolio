import { useState } from "react";
import {
  FiPlus,
  FiUpload,
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
    pdfFile: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please select a PDF file only.");

      event.target.value = "";

      return;
    }

    setFormData((previous) => ({
      ...previous,
      pdfFile: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.issuer.trim()
    ) {
      alert(
        "Please enter certificate name and issuer."
      );

      return;
    }

    onSubmit({
      ...formData,

      title: formData.title.trim(),

      issuer: formData.issuer.trim(),

      date: formData.date.trim(),
    });

    setFormData({
      title: "",
      issuer: "",
      date: "",
      pdfFile: null,
    });
  };

  return (
    <form
      className="admin-panel admin-form"
      onSubmit={handleSubmit}
    >
      <h2>Add New Certificate</h2>

      <div className="admin-form-grid">

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

        <div className="admin-form-group">
          <label htmlFor="certificatePdf">
            Certificate PDF
          </label>

          <div className="admin-file-upload">
            <FiUpload />

            <input
              id="certificatePdf"
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleFileChange}
            />
          </div>

          {formData.pdfFile && (
            <p className="admin-muted">
              Selected: {formData.pdfFile.name}
            </p>
          )}
        </div>

      </div>

      <div className="admin-card-actions">

        <button
          type="submit"
          className="admin-button"
        >
          <FiPlus />
          Add Certificate
        </button>

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