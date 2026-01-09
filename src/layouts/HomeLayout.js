import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../pages/home.css";
import Footer from "../components/Footer";

const HomeLayout = ({ cartItems, addToCart, removeFromCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="home-layout">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="home-content">
        <Outlet
          context={{
            selectedCategory,
            cartItems,
            addToCart,
            removeFromCart,
          }}
        />
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
