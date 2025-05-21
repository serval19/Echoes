import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { successmsg,errormsg } from '../components/notification'
import { useState } from 'react'
import { GrRevert } from "react-icons/gr";
import {  ToastContainer } from 'react-toastify'
import axios from 'axios';

function Addentry() {

  const navigate=useNavigate()
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const data={
    title,
    content
    
  }
  function handleSubmit(){
    const token=localStorage.getItem('jwtToken')
    
    if (!title || !content) {
  return errormsg('Please fill all the fields');
  }
  axios.post('https://echoes-two-olive.vercel.app/entries',data,{
    headers:{
      'Authorization':token
    }
  })
  .then((response)=>{
    successmsg('Entry created successfully!')
    setTimeout(()=>{
      navigate('/home')
    },1000)
  })
  .catch((error)=>{
    errormsg(error.response.data.message)
  })


  }


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
    <div className='bg-gray-400 w-200  my-7  h-140 rounded-2xl mx-auto flex flex-col items-center  justify-center'>
      <div className='font-mono text-black text-3xl mt-2'>Create Entry</div>

      <div>
        <label className='text-black text-xl'>Title</label>
        <br/>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} className='border-2 border-black rounded-xl w-100 h-10 bg-white pl-3'/>
      </div>
      <div>
        <label className='text-black text-xl'>Content</label>
        <br/>
        <textarea type='text' onChange={(e)=>setContent(e.target.value)} className='border-2 border-black rounded-xl w-100 h-80 bg-white pl-3'/>
      </div>
      <div>
        <button className='bg-blue-700 text-white text-2xl py-3 px-7 mt-4 rounded-2xl hover:bg-blue-500' onClick={handleSubmit}>Submit</button>
      </div>
      
      

     </div>
     <ToastContainer />
    
    </>
    
  )
}

export default Addentry