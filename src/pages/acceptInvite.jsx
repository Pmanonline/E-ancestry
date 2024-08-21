// src/pages/AcceptInvite.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AcceptInvite = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const backendURL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8080"
      : "https://gekoda-api.onrender.com";

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      axios
        .get(`${backendURL}/api/accept-invite?token=${token}`)
        .then((response) => {
          setStatus("Invitation accepted successfully!");
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setStatus("Invalid or expired invitation token.");
          } else {
            setStatus("Error accepting invitation. Please try again.");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setStatus("Invalid or missing token.");
      setLoading(false);
    }
  }, [location.search]);

  useEffect(() => {
    if (status.includes("successfully")) {
      setTimeout(() => {
        window.location.href =
          "/register?token=" +
          new URLSearchParams(location.search).get("token");
      }, 2000); // Delay to allow user to see the success message
    }
  }, [status, location.search]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Accept Your Invitation
        </h1>
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4v4l4-4-4-4v4H4v4h8zM4 12v4h8v4l4-4-4-4v4H4z" />
            </svg>
          </div>
        ) : (
          <p
            className={`text-lg font-semibold ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            } mt-4`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default AcceptInvite;
