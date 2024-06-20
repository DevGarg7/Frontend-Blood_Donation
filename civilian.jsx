import React from 'react';
import './civilian.css';

const Civilian = () => {
  return (
    <div className="form-container">
    
      <form className="form">
        <div className="form-row">
          <input type="text" placeholder="First Name" className="form-input" />
          <input type="text" placeholder="Middle Name" className="form-input" />
          <input type="text" placeholder="Last Name" className="form-input" />
        </div>
        <input type="text" placeholder="Address" className="form-input1" />
        <div className="form-row">
          <input type="text" placeholder="State" className="form-input" />
          <input type="text" placeholder="City" className="form-input" />
          <input type="date" placeholder="Date of Birth" className="form-input" />
        </div>
        <div className="form-row">
          <select className="form-input">
            <option value="" disabled selected>Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <select className="form-input">
            <option value="" disabled selected>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="form-button">Sign up</button>
      </form>
    </div>
  );
};

export default Civilian;
