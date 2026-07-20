import { useState } from "react";
import { FiSend } from "react-icons/fi";

import usePortfolio from "../../hooks/usePortfolio";

function ContactForm() {
  const {
    portfolioData,
    setMessages,
  } = usePortfolio();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] =
    useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleString(),
    };

    const currentMessages =
      portfolioData?.messages || [];

    setMessages([
      ...currentMessages,
      newMessage,
    ]);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setSuccessMessage(
      "Your message has been sent successfully."
    );
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      {successMessage && (
        <div className="contact-success">
          {successMessage}
        </div>
      )}

      <div className="form-group">
        <label>
          Name <span>*</span>
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Email <span>*</span>
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Subject <span>*</span>
        </label>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
        />
      </div>

      <div className="form-group">
        <label>
          Message <span>*</span>
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows="6"
          required
        />
      </div>

      <button
        type="submit"
        className="send-message-btn"
      >
        <FiSend />
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;