import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

export default function Signup() {
  const username = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  async function Signup() {
    try {
      const response = await axios.post('https://thecurryguy.vercel.app/user/signup', {
        username: username.current.value,
        password: password.current.value,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
      });

      setAlertMessage('You are signed up: ' + response.data.message);
      setAlertSeverity('success');
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false); 
        if (alertSeverity === 'success') {
          navigate("/");
        }
      }, alertSeverity === 'error' ? 4000 : 2000); 
    } catch (error) {
      console.error('Signup Error:', error);
      

      setAlertMessage('Error signing up: ' + error.message);
      setAlertSeverity('error');
      setShowAlert(true);
      

      setTimeout(() => {
        setShowAlert(false); 
      }, 4000); 
    }
  }

  return (
    <>
      <div id="signupCard">
        <h1>Sign Up</h1>
        <input ref={firstName} placeholder='Firstname' />
        <input ref={lastName} placeholder='LastName' />
        <input ref={username} placeholder='Username' />
        <input ref={password} placeholder='Password' type="password" />
        <button onClick={Signup}>Sign up</button>
        <li>Already have an account? <Link to="/login">Login here</Link></li>
      </div>

      {showAlert && (
        <Alert
          icon={alertSeverity === 'success' ? <CheckIcon fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
          severity={alertSeverity}
          sx={{
            position: 'fixed',
            top: '70px',
            left: '50%',
            transform: 'translateX(-50%)', 
            zIndex: 1200,
            width: 'auto'
          }}
        >
          {alertMessage}
        </Alert>
      )}
    </>
  );
}