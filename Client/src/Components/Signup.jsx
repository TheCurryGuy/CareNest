import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const username = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();

  async function Signup() {
    try {
      const response = await axios.post('http://localhost:3000/user/signup', {
        username: username.current.value,
        password: password.current.value,
        firstName: firstName.current.value,
        lastName: lastName.current.value
      });
      alert('You are signed up: ' + response.data.message);
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Error signing up'+error);
    }
  }

  return (
    <>
        <div id = "signupCard">
            <h1>Sign Up</h1>
            <input ref={firstName} placeholder='Firstname' />
            <input ref={lastName} placeholder='LastName' />
            <input ref={username} placeholder='Username' />
            <input ref={password} placeholder='Password' type="password" />
            <button onClick={Signup}>Sign up</button>
            <li><Link to="/login">Login here</Link></li>
        </div>
        
    </>
  );
}
