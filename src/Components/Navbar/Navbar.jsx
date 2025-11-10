import React, { useState } from "react";
import "./Navbar.css";
import dashboard from "../../assets/dashboard.png";
import profile from "../../assets/profile.png";
import addsymbol from "../../assets/addsymbol.png";
import AddForm from "../AddForm/AddForm";
import { db } from "../../firebaseConfig"; // ✅ import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // ✅ Firestore functions

function Navbar() {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const handleSaveAsset = async (newAsset) => {
    try {
    
      await addDoc(collection(db, "assets"), newAsset);

      alert("✅ Asset added successfully!");
      setShowForm(false);
    } catch (error) {
      console.error("Error adding asset:", error);
      alert("❌ Failed to add asset. Check console for details.");
    }
  };

  return (
    <>
      <nav className="navbar flex-div">
        <div className="nav-left flex-div">
          <h2 className="logo-text">InvestView.</h2>
        </div>

        <div className="nav-right flex-div">
          <button className="nav-btn">
            <img className="dashboard-icon" src={dashboard} alt="Dashboard icon" />
            <span>Dashboard</span>
          </button>

          <button onClick={handleOpenForm} className="nav-add-btn">
            <img className="add-icon" src={addsymbol} alt="Add Assets icon" />
            <span>Add Assets</span>
          </button>

          <div className="profile-wrapper">
            <img className="profile-icon" src={profile} alt="Profile" />
          </div>
        </div>
      </nav>

      {/* ✅ Only show AddForm when needed */}
      {showForm && <AddForm onClose={handleCloseForm} onSave={handleSaveAsset} />}
    </>
  );
}

export default Navbar;


