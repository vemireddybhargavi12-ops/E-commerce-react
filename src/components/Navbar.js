import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <div style={styles.navbar}>
      <div style={styles.title}>Shop Now</div>

      {/* 👇 Cart icon with Link */}
      <Link to="/home/cart" style={styles.cart}>
        <span style={styles.cartIcon}>🛒</span>

        {cartCount > 0 && (
          <span style={styles.badge}>{cartCount}</span>
        )}
      </Link>
    </div>
  );
};

const styles = {
  navbar: {
    height: "50px",
    backgroundColor: "#111827",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },

  title: {
    fontSize: "18px",
    fontWeight: "600",
  },

  cart: {
    position: "absolute",
    right: "20px",
    textDecoration: "none",
    color: "#fff",
  },

  cartIcon: {
    fontSize: "24px",
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default Navbar;
