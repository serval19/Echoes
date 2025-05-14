import React from 'react'
import doodleart from '../assets/doodleart.jpg'
import { successmsg } from '../components/notification'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
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

    


    </>
  )
}

export default Home