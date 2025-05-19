import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Addentry from './pages/Addentry'
import Viewentry from './pages/Viewentry'
import PrivateRoute  from './PrivateRoute'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate
          to="/Login"/>
        } />
        <Route path="/login" element={<Login/>} />

        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/addentry" element={<PrivateRoute><Addentry /></PrivateRoute>} />
        <Route path="/viewentry/:id" element={<PrivateRoute><Viewentry /></PrivateRoute>} />
      </Routes>
    </div>
    
  )
}

export default App
