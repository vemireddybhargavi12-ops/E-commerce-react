import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // demo credentials
    if (email === "admin@shop.com" && password === "2850") {
      localStorage.setItem("isLoggedIn", "true"); //  persist login
      onLogin();                                 // update App state
      navigate("/home");                         // redirect
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>ShopEase</h2>
        <p>Login to your account</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="register-text">
          Don’t have an account? <a href="/register">Register</a>
        
        <p>
  New user?{" "}
  <span
    style={{ color: "#ff7a00", cursor: "pointer" }}
    onClick={() => navigate("/register")}
  >
    Register here
  </span>
</p>

        
        
        </div>
      </div>
    </div>
  );
}

export default Login;
