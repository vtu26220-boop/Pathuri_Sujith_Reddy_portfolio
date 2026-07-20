import { useRef, useState } from "react";

import {
  FiFileText,
  FiExternalLink,
  FiUpload,
  FiTrash2,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

function ManageResume() {
  const {
    portfolioData,
    updateProfile,
  } = usePortfolio();

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const currentResume =
    portfolioData?.profile?.resume || "";

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    if (
      file.type !==
      "application/pdf"
    ) {
      setMessage(
        "Please select a PDF file only."
      );

      event.target.value = "";

      return;
    }

    setSelectedFile(file);

    setMessage("");
  };

  const handleUpdateResume = (
    event
  ) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage(
        "Please select a resume PDF first."
      );

      return;
    }

    /*
      This creates a temporary browser URL
      for the selected PDF.

      Important:
      This works for previewing the resume
      during the current browser session.

      For permanent resume uploads,
      Firebase Storage or a backend
      will be required later.
    */

    const resumeUrl =
      URL.createObjectURL(
        selectedFile
      );

    updateProfile({
      resume: resumeUrl,
      resumeName:
        selectedFile.name,
    });

    setMessage(
      "Resume updated successfully."
    );

    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }
  };

  const handleDeleteResume = () => {
    if (!currentResume) {
      return;
    }

    const confirmed =
      window.confirm(
        "Are you sure you want to delete the current resume?"
      );

    if (!confirmed) {
      return;
    }

    updateProfile({
      resume: "",
      resumeName: "",
    });

    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value =
        "";
    }

    setMessage(
      "Resume deleted successfully."
    );
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>
          Manage Resume
        </h1>

        <p>
          Upload, update, and manage
          the resume displayed on your
          portfolio.
        </p>
      </div>

      <div className="admin-panel">
        <div className="admin-resume-icon">
          <FiFileText />
        </div>

        <h2>
          Current Resume
        </h2>

        {currentResume ? (
          <>
            

            <div className="admin-card-actions">
              <a
                href={currentResume}
                target="_blank"
                rel="noreferrer"
                className="admin-edit-button"
              >
                <FiExternalLink />

                View Current Resume
              </a>

              <button
                type="button"
                className="admin-delete-button"
                onClick={
                  handleDeleteResume
                }
              >
                <FiTrash2 />

                Delete Resume
              </button>
            </div>
          </>
        ) : (
          <div className="admin-empty-state">
            <FiFileText />

            <h3>
              No resume uploaded
            </h3>

            <p>
              Upload your resume using
              the form below.
            </p>
          </div>
        )}
      </div>

      <form
        className="admin-panel admin-form admin-section-space"
        onSubmit={
          handleUpdateResume
        }
      >
        <h2>
          {currentResume
            ? "Update Resume"
            : "Upload Resume"}
        </h2>

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

        <div className="admin-form-group">
          <label
            htmlFor="resumeFile"
          >
            Select Resume PDF
          </label>

          <input
            ref={fileInputRef}
            id="resumeFile"
            type="file"
            accept="application/pdf,.pdf"
            onChange={
              handleFileChange
            }
          />

          {selectedFile && (
            <p className="selected-file-name">
              Selected:{" "}
              {selectedFile.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="admin-button"
        >
          <FiUpload />

          {currentResume
            ? "Update Resume"
            : "Upload Resume"}
        </button>
      </form>
    </section>
  );
}

export default ManageResume;