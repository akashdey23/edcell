import React from 'react';
import './Details.css';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/');  // Change this to the desired path
  };

  return (
    <div className="details">
      <div className="head1">
        <p>Details Of</p>
        <h1>YUKTI CHALLENGE</h1>
      </div>
      <div className="middle">
        <p>
          <img src={star} alt="Star" />
        </p>
        <span> Note : </span>
        <span id="text">
          Be careful while submitting the problem statement & its category.
        </span>
      </div>
      <div className="row11">
        <input type="text" placeholder="Problem Statement (within 250 words)" />
        <select>
          <option>Select Problem Category</option>
          <option>Space Technology</option>
          <option>Smart Automation</option>
          <option>Clean & green Technology</option>
          <option>Miscellaneous</option>
          <option>Transporation & Logistics</option>
          <option>Disaster Management</option>
        </select>
      </div>
      <div className="row2">
        <input type="text" placeholder="Solution for your problem Statement" />
      </div>
      <div className='footer'>
        <button onClick={handleProceedClick}>Confirm to Register</button>
      </div>
      <div className="row4">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default Details;
