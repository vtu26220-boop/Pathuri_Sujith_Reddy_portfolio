import CertificateCard from "./CertificateCard";
import usePortfolio from "../../hooks/usePortfolio";

function Certificates() {
  const { portfolioData } = usePortfolio();

  const certificates =
    portfolioData?.certificates || [];

  return (
    <section
      className="section certificates-section"
      id="certificates"
    >
      <div className="wide-container">

        <div className="certificates-heading">
          <p>CERTIFICATIONS</p>

          <h2>
            Learning with <span>proof.</span>
          </h2>

          <p className="certificate-subtitle">
            Certifications that reflect my continuous
            learning and technical growth.
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <CertificateCard
                key={certificate.id || index}
                certificate={certificate}
              />
            ))
          ) : (
            <p>No certificates added yet.</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default Certificates;