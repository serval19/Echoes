import React from 'react'
import doodleart from '../assets/doodleart.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { successmsg,errormsg  } from '../components/notification'
import { ToastContainer } from 'react-toastify'

function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin=()=>{
    if(!email || !password){
      return errormsg('Please fill all the fields')
    }
    const data={
      email,
      password
    }
    axios.post('http://localhost:8080/auth/login',data)
    
    .then((response)=>{
      successmsg('login successful!')
      console.log('login successful')
      console.log(response.data)
      localStorage.setItem('jwtToken',response.data.jwtToken)
      localStorage.setItem('name',response.data.name)
      setTimeout(()=>{
        navigate('/home')
      },1000)
      
      
      
    })
    .catch((error)=>{
      console.log(error.response.data.message)
      errormsg(error.response.data.message)
    })
    
  }

  return (
    <>
     <div className='bg-black'><span className='font-serif text-white pl-4 text-3xl'>Echoes</span></div>
     <div className='flex  flex-row'>
     <div className='max-h-screen overflow-hidden flex flex-col w-3/4'>
      <div className='h-full w-4/5 '>
        <img src={doodleart} alt='doodleart' className='h-full'/>
      </div>
      <div className='h-full  w-4/5'>
        <img src={doodleart} alt='doodleart' className='h-full'/>
      </div>

     </div>




     <div className='bg-gray-400 w-100  my-auto mr-40  h-100 rounded-2xl flex flex-col items-center  justify-center'>
      <div className='font-mono text-black text-3xl mt-2'>Login</div>

      <div>
        <label className='text-black text-xl'>Email</label>
        <br/>
        <input type='text' onChange={(e)=>setEmail(e.target.value)} className='border-2 border-black rounded-xl w-70 h-10 bg-white pl-3'/>
      </div>
      <div>
        <label className='text-black text-xl'>Password</label>
        <br/>
        <input type='password' onChange={(e)=>setPassword(e.target.value)} className='border-2 border-black rounded-xl w-70 h-10 bg-white pl-3'/>
      </div>
      <div>
        <button className='bg-blue-700 text-white text-2xl py-3 px-7 mt-4 rounded-2xl hover:bg-blue-500' onClick={handleLogin}>Login</button>
      </div>
      <div className='text-black text-10 mt-4'>Don't have an account?</div>
      <div><a href='/signup' className='text-blue-700 text-10 underline'>Signup</a></div>
      

     </div>





    <ToastContainer/>
     </div>
     
    </>

   
    
  )
}

export default Login