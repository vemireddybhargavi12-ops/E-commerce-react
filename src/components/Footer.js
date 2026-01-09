import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Shop Now. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    height: "50px",
    backgroundColor: "#111827",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    marginTop: "auto",
  },
};

export default Footer;
