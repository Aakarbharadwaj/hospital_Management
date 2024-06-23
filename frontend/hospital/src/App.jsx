import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
function App() {

  return (
    <>
      {/* <Routes> */}
      <Navbar />
      <Home />
      <Footer />
      <Login />
      {/* <Profile /> */}
      {/* </Routes> */}
    </>
  )
}

export default App
