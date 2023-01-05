import React from 'react'

const Navbar = () => {
    return (
        <nav
        style={{
            position: "sticky",
            top: 0
        }} 
        className='bg-white px-8 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between space-between'>
            <div className='flex items-center space-x-4'>
                <img
                    src = "https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                    className='h-14 px-1'
                    alt="logo"
                >
                </img>
                <h1 className = "text-2xl font-bold text-red-500 m-4"> CaterBid </h1>
            </div>
            <div className='flex items-center space-x-4 px-16 '>
                <button>How it Works</button>
                <button>About Us</button>
            </div>
            <div className='space-x-2 flex'>
                <button className='bg-white rounded-md hover:bg-orange-100 hover:rounded-md text-black font-semibold  px-1 py-1 size-5px'>
                    Login
                </button>
                <button className='bg-white rounded-md hover:bg-orange-100 hover:rounded-md text-black font-semibold  px-1 py-1 size-5px'>
                    Sign Up
                </button>
            </div>
        </nav>
    )
}

export default Navbar
