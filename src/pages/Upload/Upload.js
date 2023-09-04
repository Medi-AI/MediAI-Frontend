import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import uploadBG from "../../images/uploadBG.png";
import Giphy from "../../images/giphyy.gif";
import Navbar from "../../components/Navbar/Navbar";
import "./Upload.css";

function MedicalRecordsUpload() {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [documentDescription, setDocumentDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    let storedUserData = localStorage.getItem("mediai-user-data");
    if (!storedUserData) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }
    storedUserData = JSON.parse(storedUserData);
    setUserID(storedUserData._id);

    const authToken = localStorage.getItem("mediai-auth-token");
    if (!authToken) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }
    setAuthToken(authToken);
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const payload = new FormData();
    payload.append("documentName", documentName);
    payload.append("documentDescription", documentDescription);
    payload.append("userID", userID);
    payload.append("file", selectedFile);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setUploadProgress(percentComplete.toFixed(0));
      }
    });

    xhr.open("POST", "https://mediai-server.onrender.com/upload");
    xhr.setRequestHeader("mediai-auth-token", authToken);
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      alert(data.message);
      if (xhr.status === 200) navigate("/");
      else if (xhr.status === 401) navigate("/login");
    };

    xhr.send(payload);
  };

  return (
    <div className="medical-records-upload">
      <Navbar currentPage="Upload" />
      <div className="left-side">
        <img src={uploadBG} alt="Background" />
      </div>
      <div className="right-side">
        <h2>Upload Medical Records</h2>
        <p>
          This in-house feature allows you to upload all your medical records
          (including previous reports and test results) onto the platform.
          Uploading your medical records offers better organization, improved
          safety and easy sharing with healthcare providers or insurance
          companies. It facilitates medical information management, prevents
          errors, and helps you receive the best possible care.
        </p>
        <br />
        {loading ? (
          <>
            <h4>{`Uploading: ${uploadProgress}%`}</h4>
            <img src={Giphy} alt="loading" className="loading" />
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <input
                className="upload-input"
                type="text"
                placeholder="Document Name"
                id="document-name"
                value={documentName}
                onChange={(event) => setDocumentName(event.target.value)}
              />
              <br />
              <input
                className="upload-input"
                type="text"
                placeholder="Document Description"
                id="document-description"
                value={documentDescription}
                onChange={(event) => setDocumentDescription(event.target.value)}
              />
              <br />
              <label htmlFor="file-upload">File Upload</label>
              <input
                className="upload-input"
                type="file"
                id="file-upload"
                accept=".pdf, .jpg, .png"
                onChange={handleFileChange}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default MedicalRecordsUpload;
