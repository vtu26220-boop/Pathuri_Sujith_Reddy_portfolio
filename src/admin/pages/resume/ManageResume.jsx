import { useState } from "react";

import {
  FiFileText,
  FiExternalLink,
  FiLink,
  FiTrash2,
  FiSave,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

function ManageResume() {
  const {
    portfolioData,
    updateProfile,
  } = usePortfolio();

  const currentResume =
    portfolioData?.profile?.resume || "";

  const [resumeLink, setResumeLink] =
    useState(currentResume);

  const [message, setMessage] =
    useState("");

  // Update resume link
  const handleUpdateResume = (event) => {
    event.preventDefault();

    const link = resumeLink.trim();

    if (!link) {
      setMessage(
        "Please enter your resume link."
      );
      return;
    }

    // Check whether the entered link is valid
    try {
      new URL(link);
    } catch {
      setMessage(
        "Please enter a valid resume link."
      );
      return;
    }

    updateProfile({
      resume: link,
    });

    setMessage(
      "Resume link updated successfully."
    );
  };

  // Delete resume link
  const handleDeleteResume = () => {
    if (!currentResume) {
      return;
    }

    const confirmed =
      window.confirm(
        "Are you sure you want to remove the current resume link?"
      );

    if (!confirmed) {
      return;
    }

    updateProfile({
      resume: "",
      resumeName: "",
    });

    setResumeLink("");

    setMessage(
      "Resume link removed successfully."
    );
  };

  return (
    <section>

      {/* Page Header */}
      <div className="admin-page-header">
        <h1>
          Manage Resume
        </h1>

        <p>
          Add or update the resume link
          displayed on your portfolio.
        </p>
      </div>

      {/* Current Resume */}
      <div className="admin-panel">

        <div className="admin-resume-icon">
          <FiFileText />
        </div>

        <h2>
          Current Resume
        </h2>

        {currentResume ? (
          <div className="admin-card-actions">

            {/* View Current Resume */}
            <a
              href={currentResume}
              target="_blank"
              rel="noopener noreferrer"
              className="admin-edit-button"
            >
              <FiExternalLink />

              View Current Resume
            </a>

            {/* Delete Resume */}
            <button
              type="button"
              className="admin-delete-button"
              onClick={handleDeleteResume}
            >
              <FiTrash2 />

              Remove Resume
            </button>

          </div>
        ) : (
          <div className="admin-empty-state">

            <FiFileText />

            <h3>
              No resume link added
            </h3>

            <p>
              Add your resume link using
              the form below.
            </p>

          </div>
        )}

      </div>

      {/* Update Resume Link Form */}
      <form
        className="admin-panel admin-form admin-section-space"
        onSubmit={handleUpdateResume}
      >

        <h2>
          {currentResume
            ? "Update Resume Link"
            : "Add Resume Link"}
        </h2>

        {/* Success / Error Message */}
        {message && (
          <div
            className={
              message.includes(
                "successfully"
              )
                ? "admin-success"
                : "admin-error"
            }
          >
            {message}
          </div>
        )}

        {/* Resume Link Input */}
        <div className="admin-form-group">

          <label htmlFor="resumeLink">
            Resume Link
          </label>

          <div className="admin-input-wrapper">

            <FiLink />

            <input
              id="resumeLink"
              type="url"
              value={resumeLink}
              onChange={(event) => {
                setResumeLink(
                  event.target.value
                );

                setMessage("");
              }}
              placeholder="https://drive.google.com/..."
              required
            />

          </div>

          <p className="admin-muted">
            Paste a public Google Drive or
            other direct resume link.
          </p>

        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="admin-button"
        >
          <FiSave />

          {currentResume
            ? "Update Resume Link"
            : "Add Resume Link"}
        </button>

      </form>

    </section>
  );
}

export default ManageResume;