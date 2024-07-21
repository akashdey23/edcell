import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import Navbar from './Navbar.jsx';

const SignUp = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/details');
  };

  return (
    
    <div className="signup">
      <div className="header1">
        <p>Details Of</p>
        <h1>TEAM LEADER</h1>
      </div>
      <div className="middle">
        <div className="row">
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter your Mail ID" />
        </div>
        <div className="row">
          <input type="text" placeholder="Enter Your SIC" />
          <select>
            <option>Select Your Year</option>
            <option>1st year</option>
            <option>2nd year</option>
            <option>3rd year</option>
            <option>4th year</option>
          </select>
          <select>
            <option>Select Your Branch</option>
            <option>Computer Science & Eng.</option>
            <option>Computer Science & Technology</option>
            <option>Computer Eng.</option>
          </select>
        </div>
        <div className="row2">
          <select>
            <option>Select the number of members in your team</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="row3">
          <button onClick={handleNextClick}>Next to</button>
        </div>
        <div className="row4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
