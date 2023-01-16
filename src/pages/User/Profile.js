import React from 'react'

const Profile = () => {
  return (
    <div>
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
      </nav>
    </div>
  )
}

export default Profile
