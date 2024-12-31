import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { StateProvider } from './Context API/StateContext'
import './App.css'
import Footer from './Components/Footer'
import Landing from './Components/Landing'
import ErrorRoute from './Components/ErrorRoute'


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
            </Route>
            <Route path='*' element = {<ErrorRoute/>}/>
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

export default App
