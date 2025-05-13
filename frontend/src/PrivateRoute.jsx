import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const isloggedin=localStorage.getItem('jwtToken') 
    return isloggedin ? children : <Navigate to='/login'  />
}

export default PrivateRoute