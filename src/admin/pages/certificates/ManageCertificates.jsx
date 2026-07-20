import { useState } from "react";

import {
  FiExternalLink,
  FiPlus,
  FiTrash2,
  FiX,
  FiFileText,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";
import CertificateForm from "./CertificateForm";

function ManageCertificates() {
  const {
    portfolioData,
    setCertificates,
  } = usePortfolio();

  const [showForm, setShowForm] =
    useState(false);

  const certificates =
    portfolioData?.certificates || [];

  // Add a new certificate using a public link
  const addCertificate = (certificate) => {
    const newCertificate = {
      id: Date.now(),

      title: certificate.title,

      issuer: certificate.issuer,

      issuedDate:
        certificate.date || "",

      link:
        certificate.link || "",
    };

    setCertificates([
      ...certificates,
      newCertificate,
    ]);

    setShowForm(false);

    alert(
      "Certificate added successfully!"
    );
  };

  // Delete certificate
  const deleteCertificate = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this certificate?"
    );

    if (!confirmed) {
      return;
    }

    const updatedCertificates =
      certificates.filter(
        (certificate) =>
          certificate.id !== id
      );

    setCertificates(
      updatedCertificates
    );
  };

  return (
    <section>

      <div className="admin-page-header admin-header-row">

        <div>
          <h1>
            Manage Certificates
          </h1>

          <p>
            Add and manage your certificates.
          </p>
        </div>

        <button
          type="button"
          className="admin-button"
          onClick={() =>
            setShowForm(
              (previous) => !previous
            )
          }
        >
          {showForm ? (
            <FiX />
          ) : (
            <FiPlus />
          )}

          {showForm
            ? "Cancel"
            : "Add Certificate"}
        </button>

      </div>

      {/* Add Certificate Form */}
      {showForm && (
        <div className="admin-bottom-space">

          <CertificateForm
            onSubmit={addCertificate}
            onCancel={() =>
              setShowForm(false)
            }
          />

        </div>
      )}

      {/* Certificate List */}
      <div className="admin-certificate-grid">

        {certificates.length === 0 ? (

          <div className="admin-empty-state">

            <FiFileText />

            <h3>
              No certificates added yet
            </h3>

            <p>
              Click Add Certificate to add
              your first certificate.
            </p>

          </div>

        ) : (

          certificates.map(
            (certificate) => (

              <article
                className="admin-certificate-card"
                key={certificate.id}
              >

                <div className="admin-certificate-icon">
                  <FiFileText />
                </div>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.issuer}
                </p>

                {certificate.issuedDate && (
                  <span>
                    Issued:{" "}
                    {certificate.issuedDate}
                  </span>
                )}

                <div className="admin-card-actions">

                  {/* Open Certificate Link */}
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-edit-button"
                    >
                      <FiExternalLink />

                      View Certificate
                    </a>
                  )}

                  {/* Delete Certificate */}
                  <button
                    type="button"
                    className="admin-delete-button"
                    onClick={() =>
                      deleteCertificate(
                        certificate.id
                      )
                    }
                  >
                    <FiTrash2 />

                    Delete
                  </button>

                </div>

              </article>

            )
          )

        )}

      </div>

    </section>
  );
}

export default ManageCertificates;