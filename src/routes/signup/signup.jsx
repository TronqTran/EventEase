import './signup.scss'

export default function signup() {
  return (
    <div className='signup'>
        <div className="inputContainer">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button><a href='/'>Sign Up</a></button>  
          </form>
          <span>Already have an account? <a href="/login">Sign In</a></span>
        </div>
        <div className="imgContainer">
          <img src='/bg.png' alt=''/>
        </div>
      
    </div>
  )
}
