import { useState } from "react";
import { FiUpload } from "react-icons/fi";

function ImageUpload({ onChange }) {
  const [preview, setPreview] = useState(null);

  const handleFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);

    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="admin-upload">
      {preview && (
        <img
          src={preview}
          alt="Upload preview"
          className="admin-upload-preview"
        />
      )}

      <label className="admin-upload-button">
        <FiUpload />
        Choose Image

        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          hidden
        />
      </label>
    </div>
  );
}

export default ImageUpload;