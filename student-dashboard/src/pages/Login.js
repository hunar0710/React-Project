import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Importing the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, name: "Student Name", profilePic: "path_to_default_pic" }; // Dummy data for example
    dispatch(setUser(user));
    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              required 
            />
          </div>
          <div className="input-group remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
              id="rememberMe" 
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-links">
          <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          <Link to="/register" className="register-link">Create a New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;