import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [image, setImage] = useState(null);
  const [isDirty, setIsDirty] = useState(false); // 🔑 unsaved changes flag

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setIsDirty(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDirty(false); // ✅ saved
    alert("Profile Saved Successfully ✅");
  };

  const handleBack = () => {
    if (isDirty) {
      const confirmLeave = window.confirm(
        "You have unsaved changes. Do you really want to leave?"
      );
      if (!confirmLeave) return;
    }
    navigate("/home");
  };

  return (
    <div className="profile-page">

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>

      <div className="profile-card">
        <h2>My Profile</h2>

        <div className="avatar-box">
          <img
            src={
              image ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="profile"
          />
          <label className="edit-label">
            Edit Profile
            <input type="file" hidden onChange={handleImage} />
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
