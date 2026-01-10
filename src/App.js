import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Password from "./pages/Password";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // LOGIN SUCCESS
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // CART LOGIC
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <BrowserRouter>
      {/*  NAVBAR ONLY AFTER LOGIN */}
      {isLoggedIn && <Navbar cartCount={cartCount} />}

      <Routes>
        {/*  ROOT LOGIN */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        <Route path="/register" element={<Register />} />

        {/*  PROTECTED HOME */}
        <Route
          path="/home"
          element={
isLoggedIn ? (
  <HomeLayout
    cartItems={cartItems}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
  />
) : (
  <Navigate to="/" />
)
          }
        >
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
        />

        <Route
          path="/settings"
          element={isLoggedIn ? <Settings /> : <Navigate to="/" />}
        />

        <Route path="/change-password" element={<Password />} />

        {/* LOGOUT */}
        <Route
          path="/logout"
          element={
            <Logout
              onLogout={() => {
                setIsLoggedIn(false);
                setCartItems([]);
              }}
            />
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
