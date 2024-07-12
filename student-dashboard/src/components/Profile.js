import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../actions';
import './Profile.css';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        const updatedUser = { ...user, profilePic: reader.result };
        dispatch(setUser(updatedUser));
        localStorage.setItem('user', JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirmation do not match.');
      return;
    }
    // Dispatch action to update the password
    // Assuming you have an action like setPassword
    // dispatch(setPassword(currentPassword, newPassword));
    console.log('Password changed');
  };

  return (
    <div className="profile">
      <h1>Student Profile</h1>
      <div className="profile-pic-container">
        <img src={profilePic} alt="profile" className="profile-pic-large" />
        <input
          type="file"
          id="file-upload"
          className="file-input"
          onChange={handleProfilePicChange}
        />
        <label htmlFor="file-upload" className="file-label">
          Change Profile Picture
        </label>
      </div>
      <div className="user-info">
        <h2>HUNAR SIKKA</h2>
        <h3>{user.email}</h3>
      </div>
      <form className="change-password-form" onSubmit={handlePasswordChange}>
        <h2>Change Password</h2>
        <div className="form-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="change-password-button">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Profile;