import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrimarySearchAppBar from './components/NavBar'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
