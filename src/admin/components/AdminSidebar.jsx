import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiInfo,
  FiBookOpen,
  FiCode,
  FiFolder,
  FiAward,
  FiCheckCircle,
  FiFileText,
  FiPhone,
  FiLink,
  FiMail,
  FiLogOut,
  FiX,
} from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <FiHome />,
    end: true,
  },
  {
    name: "Profile",
    path: "/admin/profile",
    icon: <FiUser />,
  },
  {
    name: "About",
    path: "/admin/about",
    icon: <FiInfo />,
  },
  {
    name: "Education",
    path: "/admin/education",
    icon: <FiBookOpen />,
  },
  {
    name: "Skills",
    path: "/admin/skills",
    icon: <FiCode />,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: <FiFolder />,
  },
  {
    name: "Certificates",
    path: "/admin/certificates",
    icon: <FiAward />,
  },
  {
    name: "Certifications",
    path: "/admin/certifications",
    icon: <FiCheckCircle />,
  },
  {
    name: "Resume",
    path: "/admin/resume",
    icon: <FiFileText />,
  },
  {
    name: "Contact",
    path: "/admin/contact",
    icon: <FiPhone />,
  },
  {
    name: "Social Links",
    path: "/admin/social",
    icon: <FiLink />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <FiMail />,
  },
];

function AdminSidebar({
  isOpen = false,
  onClose = () => {},
}) {
  const auth = useAuth();

  const handleLogout = () => {
    if (typeof auth?.logout === "function") {
      auth.logout();
    }

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`admin-sidebar ${
          isOpen ? "admin-sidebar-open" : ""
        }`}
      >
        <div className="admin-sidebar-header">
          <NavLink
            to="/admin"
            className="admin-logo"
            onClick={onClose}
          >
            Sujith<span>.</span>
          </NavLink>

          <button
            type="button"
            className="admin-sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>

        <div className="admin-sidebar-title">
          ADMIN PANEL
        </div>

        <nav className="admin-sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) =>
                `admin-sidebar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span className="admin-sidebar-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <NavLink
            to="/"
            className="admin-view-portfolio"
            target="_blank"
          >
            View Portfolio
          </NavLink>

          <button
            type="button"
            className="admin-logout-button"
            onClick={handleLogout}
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default AdminSidebar;