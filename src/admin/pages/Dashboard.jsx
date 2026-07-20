import {
  FiCode,
  FiFolder,
  FiAward,
  FiMail,
} from "react-icons/fi";

import StatCard from "../components/StatCard";
import usePortfolio from "../../hooks/usePortfolio";

function Dashboard() {
  const {
    portfolioData,
  } = usePortfolio();

  const skillCount = Object.values(
    portfolioData?.skills || {}
  ).flat().length;

  const projectCount =
    portfolioData?.projects?.length || 0;

  const certificateCount =
    portfolioData?.certificates?.length || 0;

  const messageCount =
    portfolioData?.messages?.length || 0;

  const educationCount =
    portfolioData?.education?.length || 0;

  return (
    <section className="admin-dashboard">

      <div className="admin-page-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back, Sujith. Manage your
            portfolio from here.
          </p>
        </div>
      </div>

      <div className="admin-stats-grid">

        <StatCard
          icon={<FiFolder />}
          title="Projects"
          value={projectCount}
        />

        <StatCard
          icon={<FiCode />}
          title="Skills"
          value={skillCount}
        />

        <StatCard
          icon={<FiAward />}
          title="Certificates"
          value={certificateCount}
        />

        <StatCard
          icon={<FiMail />}
          title="Messages"
          value={messageCount}
        />

      </div>

      <div className="admin-dashboard-grid">

        <div className="admin-panel">

          <h2>Portfolio Overview</h2>

          <div className="admin-overview-list">

            <div>
              <span>Name</span>

              <strong>
                {portfolioData?.profile?.name}
              </strong>
            </div>

            <div>
              <span>Role</span>

              <strong>
                {portfolioData?.profile?.role}
              </strong>
            </div>

            <div>
              <span>Education Records</span>

              <strong>
                {educationCount}
              </strong>
            </div>

            <div>
              <span>Project Records</span>

              <strong>
                {projectCount}
              </strong>
            </div>

          </div>

        </div>

        <div className="admin-panel">

          <h2>Quick Actions</h2>

          <div className="admin-quick-actions">

            <a href="/admin/projects">
              Add Project
            </a>

            <a href="/admin/skills">
              Manage Skills
            </a>

            <a href="/admin/certificates">
              Add Certificate
            </a>

            <a href="/admin/resume">
              Update Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;