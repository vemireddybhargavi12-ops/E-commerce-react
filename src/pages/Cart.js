import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useOutletContext();
  const navigate = useNavigate();

  // 🛒 EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <h2>Your cart is empty 🛒</h2>
        <p>Add some items to continue shopping</p>

        {/* 🔙 BACK BUTTON */}
        <button style={styles.backBtn} onClick={() => navigate("/home")}>
          ← Back to Shop
        </button>
      </div>
    );
  }

  // 🛍️ CART WITH ITEMS
  return (
    <div style={styles.cartContainer}>
      <button style={styles.backBtn} onClick={() => navigate("/home")}>
        ← Back to Shop
      </button>

      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={styles.item}>
          {item.name} × {item.qty}
        </div>
      ))}
    </div>
  );
};

const styles = {
  emptyContainer: {
    minHeight: "calc(100vh - 100px)", // navbar + footer space
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#444",
  },

  cartContainer: {
    padding: "20px",
    minHeight: "calc(100vh - 100px)",
  },

  item: {
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },

  backBtn: {
    marginTop: "16px",
    padding: "8px 14px",
    backgroundColor: "#111827",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Cart;
