import { useRef, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StateContext } from '../Context API/StateContext';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';
import jwt_decode from 'jwt-decode';

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { setLogin, setLogout } = useContext(StateContext);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  

  function isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decoded.exp < currentTime; 
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }

  async function Signin() {
    try {
      const token = localStorage.getItem('token');
      let response = {};
      if (token) {
        // Checking if the token is expired
        if (isTokenExpired(token)) {
          alert('Your session has expired cant redirect. Please log in again.');
          localStorage.removeItem('token'); // Removing expired token
        } else {
          alert('You are already Signed In');
          setLogin(true);
          setLogout(false);
          navigate('/home');
          return;
        }
      } else{
          response = await axios.post('https://thecurryguy.vercel.app/user/signin', {
          username: username.current.value,
          password: password.current.value,
        });
      }

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setAlertMessage('You are signed in');
        setAlertSeverity('success');
        setShowAlert(true);
        setLogin(true);
        setLogout(false);
        setTimeout(() => {
          setShowAlert(false); 
          navigate("/home");
        }, 2000); 
      } else {
        setAlertMessage('Invalid Credentials');
        setAlertSeverity('error');
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false); 
        }, 2000); 
      }
    } catch (error) {
      console.error('Signin Error:', error);
      setAlertMessage('Error signing in');
      setAlertSeverity('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false); 
      }, 4000); 
    }
  }

  return (
    <>
      <div id="loginCard">
        <h1>Login</h1>
        <input ref={username} placeholder='Username' />
        <input ref={password} placeholder='Password' type="password" />
        <button onClick={Signin}>Sign in</button>
        <button>
          <Link to="/Signup" className="button-link">Go to Signup</Link>
        </button>
        <li><Link to="/home" onClick = {()=> {
          setLogin(true);
          setLogout(false);
          }}className='proceed-here'><b>Proceed here</b></Link></li>
      </div>


      {showAlert && (
        <Alert
          icon={alertSeverity === 'success' ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
          severity={alertSeverity}
          sx={{
            position: 'fixed',
            top: '85px',
            left: '50%',
            transform: 'translateX(-50%)', 
            zIndex: 1200,
            width: '12vw',
            paddingLeft: '3.5vw'
          }}
        >
          {alertMessage}
        </Alert>
      )}
    </>
  );
}