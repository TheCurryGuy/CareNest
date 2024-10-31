import React, { useState, useContext } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { StateContext } from '../Context API/StateContext';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isPost, setPost, isTodo, setTodo, isBMI, setBMI, isWatch, setWatch, isMedi, setMedi } = useContext(StateContext);

    const toggle = () => setIsOpen(!isOpen);

    function clickPost() {
        if (isPost) {
            alert("You are here Only");
        } else {
            setPost(true);
            setTodo(false);
            setBMI(false);
            setWatch(false);
            setMedi(false);
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
                
                <button onClick={clickPost} className="link">
                    <div className="icon"><FaTh /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">My Posts</div>
                </button>
                
                <button onClick={clickTodo} className="link">
                    <div className="icon"><FaUserAlt /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Todo App</div>
                </button>

                <button onClick={clickBMI} className="link">
                    <div className="icon"><FaRegChartBar /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">BMI Calculator</div>
                </button>

                <button onClick={clickWatch} className="link">
                    <div className="icon"><FaCommentAlt /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Stopwatch</div>
                </button>

                <button onClick={clickMedi} className="link">
                    <div className="icon"><FaShoppingBag /></div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Medication Reminder</div>
                </button>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
// import {useNavigate, Link} from 'react-router-dom'
// import React, { useContext } from 'react';
// import { StateContext } from '../Context API/StateContext';


// export default function Sidebar(){
//     const { isPost, setPost, isTodo, setTodo, isBMI, setBMI, isWatch, setWatch, isMedi, setMedi } = useContext(StateContext);

//     function clickPost(){
//         if(isPost){
//             alert("You are here Only")
//         } else{
//             setPost(true)
//             setTodo(false)
//             setBMI(false)
//             setWatch(false)
//             setMedi(false)
//         }
        
//     }

//     function clickTodo(){
//         if(isTodo){
//             alert("You are here Only")
//         } else{
//             setTodo(true)
//             setPost(false)
//             setBMI(false)
//             setWatch(false)
//             setMedi(false)
//         }
//     }
//     function clickBMI(){
//         if(isBMI){
//             alert("You are here Only")
//         } else{
//             setBMI(true)
//             setPost(false)
//             setTodo(false)
//             setWatch(false)
//             setMedi(false)
//         }
//     }
//     function clickWatch(){
//         if(isWatch){
//             alert("You are here Only")
//         } else{
//             setWatch(true)
//             setPost(false)
//             setTodo(false)
//             setBMI(false)
//             setMedi(false)
//         }
//     }
//     function clickMedi(){
//         if(isMedi){
//             alert("You are here Only")
//         } else{
//             setMedi(true)
//             setPost(false)
//             setTodo(false)
//             setBMI(false)
//             setWatch(false) 
//         }
//     }


//     return<>
//         <div className='sidebar'>
//             <button onClick={clickPost}>My Posts</button>
//             <button onClick={clickTodo}>Todo App</button>
//             <button onClick={clickBMI}>BMI Calculator</button>
//             <button onClick={clickWatch}>Stopwatch</button>
//             <button onClick={clickMedi}>Medication Reminder</button>
//         </div>
//     </>
// }
