import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { successmsg,errormsg } from '../components/notification'
import { GrRevert } from 'react-icons/gr'
import { ToastContainer } from 'react-toastify'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Viewentry() {
  const [entry,setEntry]=useState({})
  const navigate=useNavigate()
  const { id }=useParams()
  useEffect(() => {
  
  const token = localStorage.getItem('jwtToken');
  if (!token) {
    errormsg('Please login first');
    setTimeout(() => {
      navigate('/login');
    }, 1000);

  }
  else{
    axios.get(`https://echoes-two-olive.vercel.app/entries/${id}`,{
      headers:{
        'Authorization':token
      }
    })
    .then((res)=>{
      console.log(res.data)
      setEntry(res.data.entry)
    })
    .catch((err)=>{
      console.log(err)
      if(err.response.status===404){
        errormsg('No entry found!')
      }
    })
  }
}, []); // Add dependencies

  
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
    <div className='bg-gray-400 w-200  my-7  h-140 rounded-2xl mx-auto flex flex-col '>
      <span className='text-3xl text-black font-mono pt-5 pl-4'>Title: {entry.title}</span>
      <span className='text-3xl text-black font-mono pt-5 pl-4'>Created Date:  {new Date(entry.createddate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}</span>
  <span className='text-3xl text-black font-mono pt-5 pl-4'>Content:</span>
  
  <span className='text-2xl text-black font-mono pt-5 pl-4'>{entry.content}</span>
      
           
      

     </div>
     <ToastContainer />
    
    
    </>
  )
}

export default Viewentry