import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { StateContext } from '../Context API/StateContext'



export default function Navbar(){
  const { isLogin, isLogout, setLogout, setLogin } = useContext(StateContext);
  const navigate = useNavigate()
  
  function logOut(){
    localStorage.removeItem('token')
    setLogout(true)
    setLogin(false)
    navigate("/")
  }
  
  return <div className='Navbar'>
    <div className='name-navbar'>
      CareNest - The Healthcare Community
    </div>
    <ul>
      <div className='btn-nav'>
          {isLogout && <li className = "special"><Link to="/login">Login</Link></li>}
          {isLogout && <li><Link to="/Signup">Signup</Link></li>}
          {isLogin && <button className='logout-btn' onClick = {logOut}>Log Out</button>}
      </div>
    </ul>
  </div>
}
  