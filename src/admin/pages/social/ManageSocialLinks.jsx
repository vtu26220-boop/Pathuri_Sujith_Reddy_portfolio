import { useState } from "react";
import usePortfolio from "../../../hooks/usePortfolio";

function ManageSocialLinks() {
  const { portfolioData, updateProfile } = usePortfolio();

  const [form, setForm] = useState({
    github: portfolioData.profile.github || "",
    linkedin: portfolioData.profile.linkedin || "",
    leetcode: portfolioData.profile.leetcode || "",
    hackerrank: portfolioData.profile.hackerrank || "",
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
    setMessage("Social links updated successfully.");
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>Manage Social Links</h1>
        <p>Update your professional profile links.</p>
      </div>

      <form className="admin-panel admin-form" onSubmit={handleSubmit}>
        {message && <div className="admin-success">{message}</div>}

        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>GitHub</label>

            <input
              type="url"
              name="github"
              value={form.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
            />
          </div>

          <div className="admin-form-group">
            <label>LinkedIn</label>

            <input
              type="url"
              name="linkedin"
              value={form.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="admin-form-group">
            <label>LeetCode</label>

            <input
              type="url"
              name="leetcode"
              value={form.leetcode}
              onChange={handleChange}
            />
          </div>

          <div className="admin-form-group">
            <label>HackerRank</label>

            <input
              type="url"
              name="hackerrank"
              value={form.hackerrank}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="admin-button">
          Save Social Links
        </button>
      </form>
    </section>
  );
}

export default ManageSocialLinks;