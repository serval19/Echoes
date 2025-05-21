import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle,BiShow } from 'react-icons/bi';

import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';




const EntriesSingleCard = ({title,createDate,id}) => {
  
  return (
    <div key={id}
    
    className='border-2 border-gray-500 rounded-lg px-4 py-2 relative hover:shadow-xl'
  >
    
    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
      { 
        new Date(createDate).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
})
      }
    </h2>
    
    <div className='flex justify-start items-center gap-x-2'>
      <PiBookOpenTextLight className='text-red-300 text-2xl' />
      <h2 className='my-1'>{title}</h2>
    </div>
    
    <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
      
      <Link to={`/viewentry/${id}`} >
        <BsInfoCircle className='text-2xl text-green-800 hover:text-black ' />
      </Link>
      
      
        <Link to={`/delete/${id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
           </Link>   
      
    </div>
  </div>
  )
}

export default EntriesSingleCard