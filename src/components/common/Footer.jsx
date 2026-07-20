import usePortfolio from "../../hooks/usePortfolio";

function Footer() {
  const { portfolioData } = usePortfolio();

  const profile = portfolioData?.profile || {};

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}{" "}
        {profile.name || "Pathuri Sujith Reddy"}.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;