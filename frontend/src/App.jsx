import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/home'
import Addentry from './pages/addentry'
import Viewentry from './pages/viewentry'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate
          to="/login"/>
        } />
        <Route path="/login" element={<Login/>} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addentry" element={<Addentry/>} />
        <Route path="/viewentry" element={<Viewentry/>} />
      </Routes>
    </div>
    
  )
}

export default App
