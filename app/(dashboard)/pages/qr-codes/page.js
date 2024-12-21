"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const QRCodes = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newQrCodeFile, setNewQrCodeFile] = useState(null);

  const [token, setToken] = useState("");

  useEffect(() => {
    // Only runs on the client-side
    const tokenFromLocalStorage = localStorage.getItem("token");
    setToken(tokenFromLocalStorage || "");
  }, []);

  const API_URL = "https://betazone.promaticstechnologies.com/admin/payment";

  const fetchQRCode = async () => {
    try {
      const response = await axios.get(`${API_URL}/getQRCode`, {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      });
      setQrCodeData(response.data.data);
    } catch (error) {
      console.error("Error fetching QR code:", error);
    }
  };

  const updateQRCode = async () => {
    if (!newQrCodeFile) {
      alert("Please select a QR code image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("qr_code", newQrCodeFile);

    try {
      const response = await axios.post(`${API_URL}/addQRCode`, formData, {
        headers: {
          Authorization:
            `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.code === 200) {
        alert("QR Code updated successfully!");
        fetchQRCode(); // Refresh QR Code data
        setShowModal(false); // Close the modal
      }
    } catch (error) {
      console.error("Error updating QR code:", error);
      alert("Failed to update QR Code. Please try again.");
    }
  };

  useEffect(() => {
    fetchQRCode();
  }, [token]);

  return (
    <div className="container mt-4">
      <h2>QR Codes</h2>
      {qrCodeData ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>QR Code</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{qrCodeData._id}</td>
              <td>
                <img
                  src={`https://uat-catalysk.s3.ap-south-1.amazonaws.com/public/${qrCodeData.qr_code}`}
                  alt="QR Code"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{new Date(qrCodeData.createdAt).toLocaleString()}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => setShowModal(true)}
                >
                  Edit QR Code
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading QR Code...</p>
      )}

      {/* Modal for editing QR Code */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Upload New QR Code</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => setNewQrCodeFile(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={updateQRCode}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default QRCodes;
