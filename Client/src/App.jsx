import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { StateProvider } from './Context API/StateContext'
import './App.css'
import Footer from './Components/Footer'
import Landing from './Components/Landing'


function App() {

  return (
    <>
    <StateProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout/>}>
              <Route path='/' element = {<Landing/>}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/Signup' element = {<Signup/>}/>
              <Route path='/home' element = {<Home/>}/>
              <Route path='*' element = {<ErrorRoute/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </>
  )
}

function Layout(){
  return <>
      <div id = "mainPage">
        <Navbar/>
        <div id = "content">
          <Outlet/>
        </div>
        <Footer/>
      </div>
  </>
}




// function Landing(){
//   return <div>
//     Welcome to Landing Page
//   </div>
// }

function ErrorRoute(){
  return <div>
    No page Available
  </div>
}




export default App
