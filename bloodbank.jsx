import React from 'react';
import './bloodbank.css';

const BloodBank = () => {
  return (
    <div className="form-container">
    
      <form className="form">
      <input type="text" placeholder="Blood Banks Name" className="form-input1" />
        <div className="form-row">
          <input type="text" placeholder="Owner's First Name" className="form-input" />
          
          <input type="text" placeholder="Owner's Last Name" className="form-input" />
        </div>
        <input type="text" placeholder="Address" className="form-input1" />
        
        
        <div className="form-row">
          <input type="text" placeholder="City" className="form-input" />
          <input type="text" placeholder="State" className="form-input" />
          <input type="number" placeholder="Phone No" className="form-input" />
        </div>
        <button type="submit" className="form-button">Sign up</button>
      </form>
    </div>
  );
};

export default BloodBank;