import {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { StateContext } from '../Context API/StateContext';
import Sidebar from './Sidebar';
import Post from './Main Content Components/Post';
import Todo from './Main Content Components/Todo';
import BMICal from './Main Content Components/BMI';
import PassVault from './Main Content Components/PassVault';
import MediReminder from './Main Content Components/MediReminder';
import Chatbot from './Chatbot';
import About from './Main Content Components/About';

export default function Home() {
    const { isPost, isTodo, isBMI, isWatch, isMedi, isLogin, isAbout} = useContext(StateContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
  
    useEffect(() => {
      if (!token) {
        alert("You need to login in order to access")
        navigate('/login');
      }
    }, [token, navigate]);
  
    return (
      <div className='main-content'>
            <Sidebar/>
            {isAbout && <About/>}
            {isPost && <Post/>}
            {isTodo && <Todo className = "todo-component"/>}
            {isBMI && <BMICal/>}
            {isWatch && <PassVault/>}
            {isMedi && <MediReminder/>}
            {isLogin && <Chatbot/>}
      </div>
    );
  }
  