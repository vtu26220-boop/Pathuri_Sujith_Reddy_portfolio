import { useState } from "react";
import usePortfolio from "../../../hooks/usePortfolio";

function ManageAbout() {
  const { portfolioData, updateProfile } = usePortfolio();

  const [form, setForm] = useState({
    about:
      portfolioData.profile.about ||
      "I am a Computer Science student and Full Stack Web Developer. I enjoy building modern web applications and solving real-world problems.",
    focus:
      portfolioData.profile.focus ||
      "My focus is on creating clean, practical, and accessible digital experiences while continuously improving my technical skills.",
    opportunity:
      portfolioData.profile.opportunity ||
      "Internships and Entry-Level Positions",
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
    setMessage("About section updated successfully.");
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>Manage About</h1>
        <p>Update the content displayed in your About section.</p>
      </div>

      <form className="admin-panel admin-form" onSubmit={handleSubmit}>
        {message && <div className="admin-success">{message}</div>}

        <div className="admin-form-group">
          <label>About Me</label>

          <textarea
            name="about"
            rows="6"
            value={form.about}
            onChange={handleChange}
          />
        </div>

        <div className="admin-form-group">
          <label>My Focus</label>

          <textarea
            name="focus"
            rows="5"
            value={form.focus}
            onChange={handleChange}
          />
        </div>

        <div className="admin-form-group">
          <label>Open to Opportunities</label>

          <input
            name="opportunity"
            value={form.opportunity}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="admin-button">
          Save About Section
        </button>
      </form>
    </section>
  );
}

export default ManageAbout;