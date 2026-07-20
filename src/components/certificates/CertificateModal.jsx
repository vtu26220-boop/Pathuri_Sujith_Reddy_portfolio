import { FiX } from "react-icons/fi";

function CertificateModal({ certificate, onClose }) {
  if (!certificate) {
    return null;
  }

  return (
    <div
      className="certificate-modal-overlay"
      onClick={onClose}
    >
      <div
        className="certificate-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="certificate-modal-close"
          onClick={onClose}
          aria-label="Close certificate"
        >
          <FiX />
        </button>

        <h2>{certificate.title}</h2>

        <p>{certificate.issuer}</p>

        {certificate.image && (
          <img
            src={certificate.image}
            alt={certificate.title}
          />
        )}

        {certificate.link && (
          <a
            href={certificate.link}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Open Certificate
          </a>
        )}
      </div>
    </div>
  );
}

export default CertificateModal;