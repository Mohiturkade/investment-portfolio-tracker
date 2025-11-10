import React, { useState } from "react";
import "./Signup.css";

function Signup({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}! 🎉`);
    onClose(); // Close popup after signup
  };

  return (
    <div className="signup-overlay">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Join InvestView</h2>
        <p>Track your investments smartly</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

