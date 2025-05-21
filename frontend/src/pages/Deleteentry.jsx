import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { successmsg,errormsg } from '../components/notification'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ClimbingBoxLoader } from "react-spinners";
import { ToastContainer } from 'react-toastify'


function Deleteentry() {
    const navigate=useNavigate()
    const { id }=useParams()
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const token=localStorage.getItem('jwtToken')
        if(!token){
            errormsg('Please login first')
            setTimeout(()=>{
                navigate('/login')
            })
        }
        else{
            setLoading(true)
            axios.delete(`http://localhost:8080/entries/${id}`,{
                headers:{
                    'Authorization': token
                }
            })
            .then((res)=>{
                successmsg('Entry deleted successfully')
                setTimeout(()=>{
                    navigate('/home')
                },1000)

            })
            .catch((err)=>{
                console.log(err)
                if(err.response.status===404){
                    errormsg('No entry found!')
                    setTimeout(()=>{
                    navigate('/home')
                },1000)
                }
                else{
                    errormsg('Internal server error')
                    setTimeout(()=>{
                    navigate('/home')
                },1000)
                }

            })
            
        }
    },[])
  return (
    <>
    <div className='bg-black flex items-center justify-between'>
      <span className='font-serif text-white pl-4 text-3xl'>Echoes</span>
      <span className='justify-end'><button className='bg-blue-700 text-white text-xl py-1 px-4 mt-1 mb-1 mr-3 rounded-2xl hover:bg-blue-500 font-mono' >Logout</button></span>
    </div>
    <ToastContainer />
    </>
    
  )
}

export default Deleteentry