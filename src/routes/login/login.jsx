import { login } from "../../api/auth";
import { useNavigate } from 'react-router-dom';
import './login.scss';
import {clearVenue, clearView, loginSuccess} from '../../redux/reducer';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedView = useSelector((state) => state.view.currentView);
  const savedVenue = useSelector((state) => state.venue.venueSelected);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
     
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.account));

      dispatch(loginSuccess({
        user: response.data.account,
        token: response.data.token,
      }));
      
      if (savedView) {
        
        navigate(savedView, { state: { venue: savedVenue } });
        dispatch(clearView());
        dispatch(clearVenue());
      } else {
        navigate('/');
      }

    } catch (err) {
      console.error('Lỗi khi đăng nhập:', err.message);
    }
  };

  return (
    <div className='login'>
        <div className="inputContainer">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Email' onChange={handleChange}/>
            <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
            <button>Sign In</button>    
          </form>
          <span>Don not have an account? <a href="/signup">Sign Up</a></span>
        </div>
        <div className="imgContainer">
          <img src='/bg.png' alt=''/>
        </div>
    </div>
  )
}
