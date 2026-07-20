import { useState } from "react";
import {
  FiPlus,
  FiTrash2,
  FiExternalLink,
  FiCheckCircle,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

const emptyForm = {
  title: "",
  issuer: "",
  issueDate: "",
  credentialId: "",
  credentialUrl: "",
};

function ManageCertifications() {
  const { portfolioData, setCertifications } =
    usePortfolio();

  const [form, setForm] = useState(emptyForm);

  const certifications =
    portfolioData?.certifications || [];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.title.trim() || !form.issuer.trim()) {
      return;
    }

    const newCertification = {
      id: Date.now(),
      title: form.title.trim(),
      issuer: form.issuer.trim(),
      issueDate: form.issueDate.trim(),
      credentialId: form.credentialId.trim(),
      credentialUrl: form.credentialUrl.trim(),
    };

    setCertifications([
      ...certifications,
      newCertification,
    ]);

    setForm(emptyForm);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this certification?"
    );

    if (!confirmed) {
      return;
    }

    const updatedCertifications =
      certifications.filter(
        (certification) =>
          certification.id !== id
      );

    setCertifications(updatedCertifications);
  };

  return (
    <section className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1>Manage Certifications</h1>

          <p>
            Add and manage your professional
            certifications and credentials.
          </p>
        </div>
      </div>

      <form
        className="admin-panel admin-form"
        onSubmit={handleSubmit}
      >
        <h2>Add New Certification</h2>

        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label htmlFor="title">
              Certification Name
            </label>

            <input
              id="title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Example: Java Full Stack Development"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="issuer">
              Issued By
            </label>

            <input
              id="issuer"
              type="text"
              name="issuer"
              value={form.issuer}
              onChange={handleChange}
              placeholder="Example: Infosys Springboard"
              required
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="issueDate">
              Issue Date
            </label>

            <input
              id="issueDate"
              type="text"
              name="issueDate"
              value={form.issueDate}
              onChange={handleChange}
              placeholder="Example: July 2026"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="credentialId">
              Credential ID
            </label>

            <input
              id="credentialId"
              type="text"
              name="credentialId"
              value={form.credentialId}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>

          <div className="admin-form-group admin-full-field">
            <label htmlFor="credentialUrl">
              Credential URL
            </label>

            <input
              id="credentialUrl"
              type="url"
              name="credentialUrl"
              value={form.credentialUrl}
              onChange={handleChange}
              placeholder="https://example.com/certificate"
            />
          </div>
        </div>

        <button
          type="submit"
          className="admin-button"
        >
          <FiPlus />
          Add Certification
        </button>
      </form>

      <div className="admin-section-space">
        <div className="admin-page-header">
          <div>
            <h2>Your Certifications</h2>

            <p>
              Total Certifications:{" "}
              {certifications.length}
            </p>
          </div>
        </div>

        {certifications.length === 0 ? (
          <div className="admin-empty-state">
            <FiCheckCircle className="admin-empty-icon" />

            <h3>No certifications added yet</h3>

            <p>
              Add your first certification
              using the form above.
            </p>
          </div>
        ) : (
          <div className="admin-certifications-list">
            {certifications.map(
              (certification) => (
                <article
                  key={certification.id}
                  className="admin-item-card"
                >
                  <div className="admin-certification-info">
                    <div className="admin-certification-icon">
                      <FiCheckCircle />
                    </div>

                    <div>
                      <h3>
                        {certification.title}
                      </h3>

                      <p>
                        Issued by:{" "}
                        {certification.issuer}
                      </p>

                      {certification.issueDate && (
                        <span>
                          Issued:{" "}
                          {
                            certification.issueDate
                          }
                        </span>
                      )}

                      {certification.credentialId && (
                        <p>
                          Credential ID:{" "}
                          {
                            certification.credentialId
                          }
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="admin-card-actions">
                    {certification.credentialUrl && (
                      <a
                        href={
                          certification.credentialUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="admin-edit-button"
                      >
                        <FiExternalLink />
                        View Credential
                      </a>
                    )}

                    <button
                      type="button"
                      className="admin-delete-button"
                      onClick={() =>
                        handleDelete(
                          certification.id
                        )
                      }
                    >
                      <FiTrash2 />
                      Delete
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ManageCertifications;