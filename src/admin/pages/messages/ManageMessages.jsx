import {
  FiMail,
  FiTrash2,
} from "react-icons/fi";

import usePortfolio from "../../../hooks/usePortfolio";

function ManageMessages() {
  const {
    portfolioData,
    setMessages,
  } = usePortfolio();

  const messages =
    portfolioData?.messages || [];

  const deleteMessage = (id) => {
    const updatedMessages =
      messages.filter(
        (message) =>
          message.id !== id
      );

    setMessages(updatedMessages);
  };

  return (
    <section>
      <div className="admin-page-header">
        <h1>Messages</h1>

        <p>
          View messages submitted through
          your portfolio.
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="admin-empty-state">
          <FiMail className="admin-empty-icon" />

          <h3>No messages yet</h3>

          <p>
            Messages submitted through your
            contact form will appear here.
          </p>
        </div>
      ) : (
        <div className="admin-message-list">
          {messages.map((message) => (
            <article
              className="admin-message-card"
              key={message.id}
            >
              <div className="admin-message-header">
                <div>
                  <h3>{message.name}</h3>

                  <p>{message.email}</p>

                  {message.date && (
                    <span>
                      {message.date}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="admin-delete-button"
                  onClick={() =>
                    deleteMessage(
                      message.id
                    )
                  }
                >
                  <FiTrash2 />
                </button>
              </div>

              <h4>
                {message.subject}
              </h4>

              <p>
                {message.message}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default ManageMessages;