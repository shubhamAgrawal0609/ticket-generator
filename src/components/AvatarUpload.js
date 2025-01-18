import React, { useState } from "react";

const AvatarUpload = ({ onUpload }) => {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && (selectedFile.type === "image/jpeg" || selectedFile.type === "image/png")) {
      const previewURL = URL.createObjectURL(selectedFile);
      setFilePreview(previewURL); // Show preview of the uploaded file
      onUpload(previewURL); // Pass the file preview URL to the parent component
    } else {
      alert("Please upload a valid JPG or PNG image.");
    }
  };

  return (
    <div className="border-dashed border-2 border-gray-400 p-4 text-center mb-4">
      <p className="mb-2">Upload your avatar (JPG/PNG, max size: 500KB).</p>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        className="hidden"
        id="avatarUpload"
      />
      <label
        htmlFor="avatarUpload"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Choose File
      </label>
      {filePreview && (
        <div className="mt-4">
          <p>Preview:</p>
          <img src={filePreview} alt="Avatar Preview" className="w-24 h-24 rounded-full object-cover mx-auto" />
        </div>
      )}
    </div>
  );
};

export default AvatarUpload;
