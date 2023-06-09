import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import "./Documents.css";
import Navbar from "../../components/Navbar/Navbar";

const Documents = () => {
  const navigate = useNavigate();
  const [uploads, setUploads] = useState([]);
  const [folderLink, setFolderLink] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false); // add state for displaying QR code

  useEffect(() => {
    let storedUserData = localStorage.getItem("mediai-user-data");
    if (!storedUserData) {
      alert("Please signup to continue");
      navigate("/register");
      return;
    }
    storedUserData = JSON.parse(storedUserData);

    // Replace with your own API endpoint that generates the folder link
    fetch("http://localhost:8080/getFolderLink", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "mediai-auth-token": localStorage.getItem("mediai-auth-token"),
      },
      body: JSON.stringify({
        userID: storedUserData._id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch folder link");
        }
      })
      .then((data) => {
        setFolderLink(data.link);
      })
      .catch((error) => {
        console.error(error);
      });

    // Replace with your own API endpoint that provides the list of uploads
    fetch("http://localhost:8080/getFiles", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "mediai-auth-token": localStorage.getItem("mediai-auth-token"),
      },
      body: JSON.stringify({
        userID: storedUserData._id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch uploads");
        }
      })
      .then((data) => {
        console.log(data.files);
        setUploads(data.files);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleShareFolder = () => {
    setShowQRCode(!showQRCode); // toggle QR code display state
  };

  const deleteFile = (fileId) => {
    // Replace with your own API endpoint that deletes the file
    fetch("http://localhost:8080/deleteFile", {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        "mediai-auth-token": localStorage.getItem("mediai-auth-token"),
      },
      body: JSON.stringify({
        fileId: fileId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted file from the state
          setUploads((prevUploads) =>
            prevUploads.filter((upload) => upload._id !== fileId)
          );
        } else {
          throw new Error("Failed to delete file");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="uploads-page">
      <Navbar currentPage="Documents" />
      <h1>Uploaded Files</h1>
      <div class="container-of-button">
        <button onClick={handleShareFolder}>Share Folder</button>
      </div>

      {showQRCode &&
        folderLink && ( // display QR code only if showQRCode state is true
          <div className="folder-link-section">
            <h2>Folder Link</h2>
            <div className="qr-code-div">
              <QRCode
                className="qr-code"
                style={{ width: "200px", height: "200px" }}
                value={"htdp://localhost:3000/ProfileInfo.html"}
              />
            </div>
          </div>
        )}
      <ul className="uploads-list">
        {uploads.map((upload) => (
          <li key={upload._id} className="uploads-list-item">
            <div className="doc-name">
              <h2>{upload.documentName}</h2>
            </div>
            <div className="doc-desc">
              <p>{upload.documentDescription}</p>
            </div>
            <div className="doc-download">
              <p>
                <a href={upload.documentLink}>Document</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Documents;
