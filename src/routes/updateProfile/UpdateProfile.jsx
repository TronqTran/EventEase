import React, { useRef, useState } from 'react';
import './updateProfile.scss'; // Import your CSS file
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateAvatar } from '../../redux/reducer'; // Import action updateAvatar
import { useNavigate } from 'react-router-dom';
import { updateAvatar as updateAvatarService } from '../../api/avatarService'; // Import hàm updateAvatar

export default function UpdateProfile() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Tạo ref cho input file
  const [selectedImage, setSelectedImage] = useState(user.image); // State để lưu trữ ảnh đã chọn

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

  const handleImageClick = () => {
    fileInputRef.current.click(); // Kích hoạt click trên input file
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Cập nhật state với URL của ảnh đã chọn
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng URL

      // Gọi hàm updateAvatar để lưu hoặc cập nhật ảnh
      try {
        const result = await updateAvatarService(file);
        console.log("Image uploaded successfully:", result);
        
        // Cập nhật lại avatar trong Redux store
        dispatch(updateAvatar(result.imageLink)); // Giả sử result.imageLink chứa URL của ảnh đã lưu
        setSelectedImage(result.imageLink); // Cập nhật avatar hiển thị
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="updateProfile">   
      <div className="profileInfo">
        <img 
          src={selectedImage} // Sử dụng ảnh đã chọn từ state
          alt="User  " 
          className="profileImage" 
          onClick={handleImageClick} // Thêm sự kiện click
        />
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} // Ẩn input file
          onChange={handleImageChange} // Xử lý sự kiện thay đổi
          accept="image/*" // Chỉ cho phép chọn hình ảnh
        />
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