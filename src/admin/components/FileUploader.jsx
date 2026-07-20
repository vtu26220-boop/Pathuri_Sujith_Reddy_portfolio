import { useState } from "react";
import { FiUpload, FiFileText } from "react-icons/fi";

function FileUpload({ accept = ".pdf", onChange }) {
  const [fileName, setFileName] = useState("");

  const handleFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setFileName(file.name);

    if (onChange) {
      onChange(file);
    }
  };

  return (
    <div className="admin-upload">
      {fileName && (
        <div className="admin-selected-file">
          <FiFileText />
          {fileName}
        </div>
      )}

      <label className="admin-upload-button">
        <FiUpload />
        Choose File

        <input
          type="file"
          accept={accept}
          onChange={handleFile}
          hidden
        />
      </label>
    </div>
  );
}

export default FileUpload;