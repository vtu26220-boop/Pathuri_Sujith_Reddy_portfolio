import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

function AdminHeader({ onMenuClick }) {
  const auth = useAuth();

  const handleLogout = () => {
    if (typeof auth?.logout === "function") {
      auth.logout();
    }
  };

  return (
    <header className="admin-navbar">
      <div>
        <button
          type="button"
          className="admin-mobile-menu"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>

        <h2>Portfolio Admin</h2>
        <p>Manage your portfolio content</p>
      </div>

      <div className="admin-navbar-actions">
        <div className="admin-user">
          <FiUser />

          <div>
            <strong>Pathuri Sujith Reddy</strong>
            <span>Administrator</span>
          </div>
        </div>

        <button
          type="button"
          className="admin-logout"
          onClick={handleLogout}
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;