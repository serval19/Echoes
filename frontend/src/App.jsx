import { Routes,Route, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/Signup'
import Home from './pages/home'
import Addentry from './pages/addentry'
import Viewentry from './pages/viewentry'
import PrivateRoute  from './privateRoute'
import Deleteentry from './pages/Deleteentry'

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
         <Route path="/delete/:id" element={<PrivateRoute><Deleteentry /></PrivateRoute>} />
      </Routes>
    </div>
    
  )
}

export default App
