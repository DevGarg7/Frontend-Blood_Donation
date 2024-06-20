// src/components/SignUp.js
import React, { useContext, useState } from 'react';
import './SignUp.css';
import backgroundImage from '../../assets/signup.png';
import { AuthContext } from '../../Context';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setAuthData,authData } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserLoggedIn,setisUserLoggedIn]=useState(true);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Store email and password in context
    setAuthData({ email, password,isUserLoggedIn });
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/profile-creation')
  };
  console.log("authData",authData);
  return (
    <div className="sign-up">
      <div className="form-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

