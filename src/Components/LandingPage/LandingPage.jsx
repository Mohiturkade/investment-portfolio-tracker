import React, { useState } from "react";
import "./LandingPage.css";
import heroImg from "../../assets/investment-hero.jpg";
import Login from "../Login/Login"; // ✅ import popup login

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <h1 className="logo">
          InvestView<span>.</span>
        </h1>
        <div>
          <button className="nav-btn" onClick={() => setShowLogin(true)}>
            Login →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-content">
          <h1>Smart Investing Starts Here</h1>
          <p>
            Welcome to <strong>InvestView</strong> — your all-in-one platform to
            track, manage, and analyze your investments with ease.
          </p>
          <button className="cta-btn" onClick={() => setShowLogin(true)}>
            Get Started
          </button>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Investment Illustration" />
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} InvestView. All Rights Reserved.</p>
      </footer>

      {/* ✅ Popup Login Component */}
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default LandingPage;



