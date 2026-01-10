import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const categories = ["All", "Vegetables", "Fruits", "Snacks", "Groceries"];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // 🔥 NEW STATE (only for logout confirmation)
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
  <>
    <aside className="sidebar">
      {/* ================= CATEGORIES ================= */}
      <h3 className="sidebar-title">Categories</h3>

      <ul className="category-list">
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      <hr className="sidebar-divider" />

      {/* ================= SETTINGS DROPDOWN ================= */}
      <div className="settings">
        <div
          className="settings-header"
          onClick={() => setOpen(!open)}
        >
          Settings
          <span className="arrow">{open ? "▾" : "▸"}</span>
        </div>

        {open && (
          <div className="settings-menu">
            <div
              className="settings-item"
              onClick={() => navigate("/profile")}
            >
              👤 Profile
            </div>

            <div
              className="settings-item logout"
              onClick={() => setShowLogoutConfirm(true)}
            >
              🚪 Logout
            </div>
          </div>
        )}
      </div>
    </aside>

    
    {showLogoutConfirm && (
      <div className="logout-confirm">
        <p>Are you sure you want to logout?</p>

        <div className="logout-actions">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => setShowLogoutConfirm(false)}>
            Cancel
          </button>
        </div>
      </div>
    )}
  </>
);
};
export default Sidebar;
