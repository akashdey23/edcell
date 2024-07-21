import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage.jsx';
import SignUp from './Components/SignUp.jsx';
import Details from './Components/Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/details" element={<Details/>} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
