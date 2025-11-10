import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Details from "./Components/Details/Details.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Signup from "./Components/SignUp/SignUp.jsx";

function App() {
  return (
    <div>
      <Routes>
        {/* Landing page (no navbar) */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard pages (with navbar) */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/details/:id"
          element={
            <>
              <Navbar />
              <Details />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;





