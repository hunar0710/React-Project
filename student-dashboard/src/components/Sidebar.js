import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard/scores" className="sidebar-link">
        <i className="fas fa-chart-bar"></i>
        <span>Scores</span>
      </Link>
      <Link to="/dashboard/profile" className="sidebar-link">
        <i className="fas fa-user"></i>
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default Sidebar;