import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-zinc-900 min-h-screen flex justify-center items-center '>
        <Link to="/collection"> 
    <button className='btn '>
     <p className='text-8xl m-8 text-gray-800'>Hello</p>
    </button>
    </Link>
    </div>
  )
}

export default Home
