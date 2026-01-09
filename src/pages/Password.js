import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPass !== confirm) {
      alert("New password & Confirm password not match");
      return;
    }

    alert("Password changed successfully ✅");

    setCurrent("");
    setNewPass("");
    setConfirm("");
  };

  return (
    <div className="change-password-page">
      <div className="change-password-card">
        <h2>🔐 Change Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" className="change-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
