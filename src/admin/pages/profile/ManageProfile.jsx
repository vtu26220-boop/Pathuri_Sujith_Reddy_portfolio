import { useState } from "react";
import usePortfolio from "../../../hooks/usePortfolio";

function ManageProfile() {
  const {
    portfolioData,
    updateProfile,
  } = usePortfolio();

  const [form, setForm] = useState(
    portfolioData.profile
  );

  const [message, setMessage] =
    useState("");

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateProfile(form);

    setMessage(
      "Profile updated successfully."
    );
  };

  return (
    <section>

      <div className="admin-page-header">
        <div>
          <h1>Manage Profile</h1>

          <p>
            Update your main portfolio information.
          </p>
        </div>
      </div>

      <form
        className="admin-panel admin-form"
        onSubmit={handleSubmit}
      >

        {message && (
          <div className="admin-success">
            {message}
          </div>
        )}

        <div className="admin-form-grid">

          <div className="admin-form-group">
            <label>Full Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Short Name</label>

            <input
              name="shortName"
              value={form.shortName}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Title</label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Role</label>

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Email</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Phone</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>Location</label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>GitHub URL</label>

            <input
              name="github"
              value={form.github}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group admin-full-field">
            <label>LinkedIn URL</label>

            <input
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group admin-full-field">
            <label>Description</label>

            <textarea
              name="description"
              rows="5"
              value={form.description}
              onChange={handleChange}
            />
          </div>

        </div>

        <button
          type="submit"
          className="admin-button"
        >
          Save Profile
        </button>

      </form>

    </section>
  );
}

export default ManageProfile;