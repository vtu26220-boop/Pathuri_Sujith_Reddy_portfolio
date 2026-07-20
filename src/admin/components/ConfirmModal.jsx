function ConfirmModal({
  open,
  title = "Are you sure?",
  message,
  onConfirm,
  onCancel,
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="admin-modal-overlay">
      <div className="admin-confirm-modal">
        <h2>{title}</h2>

        <p>{message}</p>

        <div className="admin-modal-actions">
          <button
            type="button"
            className="admin-edit-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="admin-delete-button"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;