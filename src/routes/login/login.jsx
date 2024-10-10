
import './login.scss';
export default function login() {
  return (
    <div className='login'>
        <div className="inputContainer">
          <h1>Sign In</h1>
          <form>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
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
