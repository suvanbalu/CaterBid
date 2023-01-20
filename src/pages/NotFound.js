import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-orange-300 flex flex-col items-center justify-center'>
      <p className='text-3xl m-8'>Page Not Found !</p>
      <img src = "https://cdn-icons-png.flaticon.com/512/6358/6358087.png" 
      className='h-40'/>
        <Link to="/home">
        Hi
      </Link>
        
    </div>
  )
}

export default NotFound
