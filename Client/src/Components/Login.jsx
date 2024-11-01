import { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StateContext } from '../Context API/StateContext';

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isLogin, setLogin, setLogout } = useContext(StateContext);
  const navigate = useNavigate()

  async function Signin() {
    try {
      const response = await axios.post('https://thecurryguy.vercel.app/user/signin', {
        username: username.current.value,
        password: password.current.value,
        
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('You are signed in');
        setLogin(true)
        setLogout(false)
        navigate("/home")
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      console.error('Signin Error:', error);
      alert('Error signing in');
    }
  }

  return (
    <>
        <div id = "loginCard">
            <h1>Login</h1>
            <input ref={username} placeholder='Username' />
            <input ref={password} placeholder='Password' type="password" />
            <button onClick={Signin}>Sign in</button>
            <button>
                <Link to="/Signup" className="button-link">Go to Signup</Link>
            </button>
            <li><Link to="/home" className='proceed-here'><b>Already Logged In ?</b></Link></li>
        </div>
    </>
  );
}
