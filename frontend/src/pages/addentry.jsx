import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { successmsg } from '../components/notification'
import { useState } from 'react'
import { GrRevert } from "react-icons/gr";

function Addentry() {

  const navigate=useNavigate()
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')


  function handleLogout(){
      
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('name')
      successmsg('Logout successful!')
      setTimeout(()=>{
        navigate('/login')
      },1000)
      
  
    }
  return (
    <>
    <div className='bg-black flex items-center justify-between'>
      <span className='font-serif text-white pl-4 text-3xl'>Echoes</span>
      <span className='justify-end'><button className='bg-blue-700 text-white text-xl py-1 px-4 mt-1 mb-1 mr-3 rounded-2xl hover:bg-blue-500 font-mono' onClick={handleLogout}>Logout</button></span>
    </div>
    <div className='bg-black max-w-fit max-h-fit rounded-xl ml-4 '><Link to='/home'><GrRevert className='text-white text-4xl mt-3 ml-3 mr-3' /></Link></div>
    <div className='border-black border-2 rounded-2xl mt-5 mx-5'>
    niggesh
    </div>
    
    </>
    
  )
}

export default Addentry