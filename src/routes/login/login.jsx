
import { useNavigate } from 'react-router-dom';
import './login.scss';
import axios from 'axios';
export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);    
    const email = formData.get("email");
    const password = formData.get("password");

     try {      
      const response = await axios.post("http://localhost:8521/KLTN-2024/api/v1/auth/login", {
        email: email,
        passWordAccount: password,
      });
      navigate("/");     
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <div className='login'>
        <div className="inputContainer">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='Email' />
            <input type="password" name='password' placeholder='Password' />
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
