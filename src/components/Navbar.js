import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav
        style={{
            position: "sticky",
            top: 0
        }} 
        className='bg-white px-4 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between space-between'>
            <div className='flex items-center w-1/3 space-x-4'>
                <img
                    src = "https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                    className='px-1 h-10 lg:h-14'
                    alt="logo"
                >
                </img>
                <h1 className = "m-4 text-2xl font-bold text-red-500"> CaterBid </h1>
            </div>
            <div className='flex items-center m-4 space-x-4 w-1/3px-16'>
                <button className='uppercase font-mont'>How it Works</button>
                <p className='uppercase font-mont'>|</p>
                <button className='uppercase font-mont'>About Us</button>
            </div>
            <div className='flex items-center justify-end w-1/3 space-x-4'>
                <button className='rounded-md px-2 py-1 transition ease-in-out text-white bg-red-500 hover:scale-110 hover:bg-phorange hover:text-black duration-150 '>
                <Link to='/login'>Login</Link>
                </button>
                <button className='font-semibold rounded-md px-2 py-1 transition ease-in-out text-red-500 hover:scale-110 duration-150'>
                    Sign Up
                </button>
            </div>
        </nav>
    )
}

export default Navbar
