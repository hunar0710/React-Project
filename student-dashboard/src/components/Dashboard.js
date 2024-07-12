import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Scores from './Scores';
import Profile from './Profile';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="scores" element={<Scores />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;