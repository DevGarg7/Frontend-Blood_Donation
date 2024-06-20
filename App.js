import React, { useState } from 'react';
import './App.css';
import EntryScreen from './components/EntryScreen/EntryScreen';
import SignUp from './components/SignUp/SignUp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context';
import ProfileCreation from './components/profilecreation/profilecreation';
import Civilian from './components/civiliansignup/civilian';
import BloodBank from './components/bloodbanksignup/bloodbank';

function App() {
  const [currentFlow, setCurrentFlow] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" >
            <Route index element={<EntryScreen />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/profile-creation' element={<ProfileCreation/>}/>
            <Route path='/civilian' element={<Civilian/>}/>
            <Route path='/blood-bank' element={<BloodBank/>}/>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;






