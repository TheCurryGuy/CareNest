import React, { useState, useContext } from 'react';
import {
    FaBars,
    FaListUl,
    FaCalculator,
    FaLock,
    FaMedapps,
    FaUserAstronaut,
    FaDoorOpen,
    FaInfo
} from "react-icons/fa";
import { StateContext } from '../Context API/StateContext';
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAbout, setAbout, isPost, setPost, isTodo, setTodo, isBMI, setBMI, isWatch, setWatch, isMedi, setMedi,isLogin, isLogout, setLogout, setLogin } = useContext(StateContext);

    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate()
  
    function logOut(){
        localStorage.removeItem('token')
        setLogout(true)
        setLogin(false)
        navigate("/")
    }

    function clickPost() {
        if (isPost) {
            alert("You are here Only");
        } else {
            setPost(true);
            setTodo(false);
            setBMI(false);
            setWatch(false);
            setMedi(false);
            setAbout(false);
        }
    }

    function clickTodo() {
        if (isTodo) {
            alert("You are here Only");
        } else {
            setTodo(true);
            setPost(false);
            setBMI(false);
            setWatch(false);
            setMedi(false);
            setAbout(false);
        }
    }

    function clickBMI() {
        if (isBMI) {
            alert("You are here Only");
        } else {
            setBMI(true);
            setPost(false);
            setTodo(false);
            setWatch(false);
            setMedi(false);
            setAbout(false);
        }
    }

    function clickWatch() {
        if (isWatch) {
            alert("You are here Only");
        } else {
            setWatch(true);
            setPost(false);
            setTodo(false);
            setBMI(false);
            setMedi(false);
            setAbout(false);
        }
    }

    function clickMedi() {
        if (isMedi) {
            alert("You are here Only");
        } else {
            setMedi(true);
            setPost(false);
            setTodo(false);
            setBMI(false);
            setWatch(false);
            setAbout(false);
        }
    }

    function ClickAbout(){
        if(isAbout){
            alert("You are here only")
        } else{
            setAbout(true);
            setMedi(false);
            setPost(false);
            setTodo(false);
            setBMI(false);
            setWatch(false);
        }
    }

    return (
        <div className="container">
            <div style={{ width: isOpen ? "250px" : "90px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Dashboard</h1>
                    <div style={{ marginLeft: isOpen ? "30px" : "20px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                <button onClick={ClickAbout} className="link">
                    <div className="icon"><FaInfo/></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">About Us</div>
                </button>
                
                <button onClick={clickPost} className="link">
                    <div className="icon"><FaUserAstronaut /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">AI Assistant</div>
                </button>
                
                <button onClick={clickTodo} className="link">
                    <div className="icon"><FaListUl /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">TaskBoard</div>
                </button>

                <button onClick={clickBMI} className="link">
                    <div className="icon"><FaCalculator /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">BMI Calculator</div>
                </button>

                <button onClick={clickWatch} className="link">
                    <div className="icon"><FaLock /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">PassVault</div>
                </button>

                <button onClick={clickMedi} className="link">
                    <div className="icon"><FaMedapps /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Medi Reminder</div>
                </button>

                
                <button onClick={logOut} className="link" style={{marginTop: "28vh"}}>
                    <div className="icon"><FaDoorOpen/></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log Out</div>
                </button>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
