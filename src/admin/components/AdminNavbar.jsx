import {
  FiLogOut,
  FiUser,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function AdminNavbar() {
  const navigate = useNavigate();

  const {
    admin,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <header className="admin-navbar">
      <div>
        <h2>Portfolio Admin</h2>

        <p>
          Manage your portfolio content
        </p>
      </div>

      <div className="admin-navbar-actions">
        <div className="admin-user">
          <FiUser />

          <div>
            <strong>
              {admin?.name || "Sujith"}
            </strong>

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

export default AdminNavbar;