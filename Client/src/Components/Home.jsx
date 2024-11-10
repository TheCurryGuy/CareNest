import React, {useEffect, useContext} from 'react'
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
import Recipe from './Main Content Components/Recipe';

export default function Home() {
    const { isPost, isTodo, isBMI, isWatch, isMedi, isLogin, isAbout, isRecipe } = useContext(StateContext);
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
            <ErrorBoundary>
              {isAbout && <About/>}
              {isPost && <Post/>}
              {isTodo && <Todo className = "todo-component"/>}
              {isBMI && <BMICal/>}
              {isWatch && <PassVault/>}
              {isMedi && <MediReminder/>}
              {isLogin && <Chatbot/>}
              {isRecipe && <Recipe/>}
            </ErrorBoundary>
      </div>
    );
  }
  
class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
      return { hasError: true };
  }
  componentDidCatch(error, info) {
      console.error("Error caught:", error, info);
  }
  render() {
      if (this.state.hasError) {
          return <>
              <h1>Something went wrong.</h1>
              <p>Please Refresh!</p>
          </>
      }
      return this.props.children; 
  }
}