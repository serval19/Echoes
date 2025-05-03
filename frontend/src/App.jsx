import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Addentry from './pages/Addentry'
import Viewentry from './pages/Viewentry'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate
          to="/Login"/>
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
