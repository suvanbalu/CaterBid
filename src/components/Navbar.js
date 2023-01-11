import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className='bg-white px-8 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between top-0 fixed w-full'>
            <div className='flex space-x-4 -center'>
                <img
                    src = "https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                    className='h-10 px-1 lg:h-14'
                    alt="logo"
                >
                </img>
                <h1 className = "m-4 text-2xl font-bold text-red-500"> CaterBid </h1>
            </div>
            <div className='flex items-center px-16 space-x-4'>
                <button className='uppercase font-mont '>How it Works</button>
                {/* <p className='uppercase font-mont'>|</p> */}
                <button className='uppercase font-mont'>About Us</button>
            </div>
            <div className='flex space-x-2'>
                <button className='px-1 py-1 font-semibold text-black bg-white rounded-md hover:bg-orange-100 hover:rounded-md size-5px'>
                <Link to='/login'>Login</Link>
                </button>
                <button className='px-1 py-1 font-semibold text-black bg-white rounded-md hover:bg-orange-100 hover:rounded-md size-5px'>
                    Sign Up
                </button>
            </div>
        </nav>
    )
}

export default Navbar
