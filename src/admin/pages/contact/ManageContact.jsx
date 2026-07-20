import { useState } from "react";
import usePortfolio from "../../../hooks/usePortfolio";

function ManageContact() {
  const { portfolioData, updateProfile } = usePortfolio();

  const [form, setForm] = useState({
    email: portfolioData.profile.email || "",
    phone: portfolioData.profile.phone || "",
    location: portfolioData.profile.location || "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateProfile(form);
    setMessage("Contact information updated successfully.");
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>Manage Contact</h1>
        <p>Update your public contact information.</p>
      </div>

      <form className="admin-panel admin-form" onSubmit={handleSubmit}>
        {message && <div className="admin-success">{message}</div>}

        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Phone Number</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group admin-full-field">
            <label>Location</label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="admin-button">
          Save Contact Details
        </button>
      </form>
    </section>
  );
}

export default ManageContact;