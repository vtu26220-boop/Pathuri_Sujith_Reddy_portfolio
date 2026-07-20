import {
  FiAward,
  FiFileText,
} from "react-icons/fi";

function CertificateCard({ certificate }) {
  const issuedDate =
    certificate.issuedDate ||
    certificate.date ||
    "Completed";

  const certificatePdf =
    certificate.pdfUrl ||
    certificate.pdf ||
    certificate.link ||
    "";

  return (
    <article className="certificate-card">
      <div className="certificate-icon">
        <FiAward />
      </div>

      <h3>{certificate.title}</h3>

      <p>{certificate.issuer}</p>

      <span>
        Issued: {issuedDate}
      </span>

      {certificatePdf && (
        <a
          href={certificatePdf}
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
          <FiFileText />
        </a>
      )}
    </article>
  );
}

export default CertificateCard;