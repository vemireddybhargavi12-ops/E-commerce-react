import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // or remove specific keys
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="logout-page">
      <div className="logout-card">
        <div className="logout-icon">🚪</div>
        <h2>Logout</h2>
        <p>Are you sure you want to logout?</p>

        <div className="logout-actions">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
