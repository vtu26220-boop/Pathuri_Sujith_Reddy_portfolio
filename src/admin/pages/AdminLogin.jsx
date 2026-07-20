import {
  useEffect,
  useState,
} from "react";

import {
  FiLock,
  FiMail,
  FiLogIn,
} from "react-icons/fi";

import {
  useNavigate,
} from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function AdminLogin() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
    loading,
  } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  useEffect(() => {
    if (
      !loading &&
      isAuthenticated
    ) {
      navigate(
        "/admin",
        {
          replace: true,
        }
      );
    }
  }, [
    loading,
    isAuthenticated,
    navigate,
  ]);

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setError("");
    setSubmitting(true);

    const result =
      await login(
        form.email.trim(),
        form.password
      );

    if (result.success) {
      navigate(
        "/admin",
        {
          replace: true,
        }
      );

      return;
    }

    setError(
      result.message ||
        "Invalid email or password."
    );

    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="admin-login-page">
        <div className="admin-login-card">
          <p>
            Checking login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          Sujith<span>.</span>
        </div>

        <h1>
          Admin Login
        </h1>

        <p>
          Sign in to manage your
          portfolio
        </p>

        {error && (
          <div className="admin-error">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
        >

          <div className="admin-form-group">

            <label htmlFor="adminEmail">
              Email
            </label>

            <div className="admin-input-wrapper">

              <FiMail />

              <input
                id="adminEmail"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter admin email"
                autoComplete="email"
                required
              />

            </div>

          </div>

          <div className="admin-form-group">

            <label htmlFor="adminPassword">
              Password
            </label>

            <div className="admin-input-wrapper">

              <FiLock />

              <input
                id="adminPassword"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="admin-login-button"
            disabled={submitting}
          >
            <FiLogIn />

            {submitting
              ? "Signing In..."
              : "Login to Dashboard"}
          </button>

        </form>

        <a
          href="/"
          className="admin-back-link"
        >
          ← Back to Portfolio
        </a>

      </div>

    </div>
  );
}

export default AdminLogin;