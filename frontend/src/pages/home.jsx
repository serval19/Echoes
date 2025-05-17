import React from 'react'
import { useState,useEffect } from 'react'
import doodleart from '../assets/doodleart.jpg'
import { successmsg } from '../components/notification'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { ClimbingBoxLoader } from "react-spinners";
import { MdOutlineAddBox } from 'react-icons/md'


function Home() {
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
      setLoading(true)
      const token=localStorage.getItem('jwtToken')
      axios.get('http://localhost:8080/entries',{
        headers:{
          'Authorization': token
        }
      })
      .then((response)=>{
        console.log(response.data.entries)
        
      })
      .catch((err)=>{
        console.log(err)
        
      })
      .finally(
        ()=>{
          setTimeout(()=>{
            setLoading(false)
          },2000)
        }
      )

    },[])
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
    <div>

    </div>
    { loading ?  <ClimbingBoxLoader color="#000000" size={20} className="mx-auto mt-20" /> : 
    <div className='bg-white w-full h-dvh flex justify-between'>
    <div className='text-3xl ml-4 mt-3'>Entries</div>
    <div>
    <Link to='/addentry'>
    <MdOutlineAddBox className='text-sky-500 text-4xl mr-6 mt-3'/>
    </Link>
    </div>
    
    </div>}

    


    </>
  )
}

export default Home