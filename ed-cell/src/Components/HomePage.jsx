import React from 'react'
import './HomePage.css'
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/signup');
  };
  return (
    
    <div className='HomePage'>
      <div className="header1">
        <p>Welcome to</p>
        <h1>Registration Portal</h1>
      </div>
      <div className="middle">
            <p><img src={star} /></p>
            <span>  Note : </span>
            <span id='text'>  Please read all the necessary details about the event before filling the form.</span>
      </div>
      <div className='footer'>
      <button onClick={handleProceedClick}>Proceed</button>
      </div>
      <div className="row4">
            <button>1</button>
            <button>2</button>
            <button>3</button>
      </div>
    </div>
  )
}

export default HomePage
