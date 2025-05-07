import React from 'react'
import doodleart from '../assets/doodleart.jpg'

function Login() {
  return (
    <>
     <div className='bg-black'><span className='font-serif text-white pl-4 text-3xl'>Echoes</span></div>
     <div className='max-h-screen overflow-hidden flex flex-col w-3/4'>
      <div className='h-full w-4/5 '>
        <img src={doodleart} alt='doodleart' className='h-full'/>
      </div>
      <div className='h-full  w-4/5'>
        <img src={doodleart} alt='doodleart' className='h-full'/>
      </div>

     </div>
    </>

   
    
  )
}

export default Login