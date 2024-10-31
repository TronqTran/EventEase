import React from 'react';
import './updateProfile.scss'; // Import your CSS file
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';

export default function UpdateProfile() {

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    // Logic to update the profile
    console.log("Profile updated");
  };

  const handleChangePassword = () => {
    // Logic to change the password
    console.log("Password changed");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    console.log("Logged out");
  };

  return (
    <div className="updateProfile">   
      <div className="profileInfo">
        <img src={user.image} alt="User " className="profileImage" />
        <div className="info">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="updateButton" onClick={handleUpdateProfile}>Update Profile</button>
        <button className="changePasswordButton" onClick={handleChangePassword}>Change Password</button>
        <button className="logoutButton" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}
