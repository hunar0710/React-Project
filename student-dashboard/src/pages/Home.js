import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Student Dashboard</h1>
        <p className="home-subtitle">Your gateway to academic success</p>
        <Link to="/login" className="login-link">
          <button className="login-button">Login</button>
        </Link>
      </div>
      <div className="illustration-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRE-aMi84EF0rE7n1UO-NleqVM0-kW5BZzNA&s" 
          alt="Illustration"
          className="illustration-image"
        />
      </div>
    </div>
  );
};

export default Home;