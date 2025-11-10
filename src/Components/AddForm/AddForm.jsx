import React, { useState } from "react";

import "./AddForm.css";

function AddForm({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    assetName: "",
    type: "",
    quantity: "",
    purchasePrice: "",
    currentPrice: "",
    purchaseDate: "",
    sector: "",
    riskLevel: "",
    goal: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    onSave(formData);


    
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add New Asset</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Asset Name</label>
            <input name="assetName" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select name="type" onChange={handleChange} required>
              <option value="">Select</option>
              <option>Stock</option>
              <option>Crypto</option>
              <option>Mutual Fund</option>
              <option>Gold</option>
              <option>Real Estate</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Quantity</label>
              <input name="quantity" type="number" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Purchase Price</label>
              <input name="purchasePrice" type="number" onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Current Price</label>
              <input name="currentPrice" type="number" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Purchase Date</label>
              <input name="purchaseDate" type="date" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Sector / Category</label>
            <input name="sector" onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Risk Level</label>
              <select name="riskLevel" onChange={handleChange}>
                <option value="">Select</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div className="form-group">
              <label>Investment Goal</label>
              <select name="goal" onChange={handleChange}>
                <option value="">Select</option>
                <option>Short-term</option>
                <option>Long-term</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea name="notes" onChange={handleChange}></textarea>
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save Asset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;