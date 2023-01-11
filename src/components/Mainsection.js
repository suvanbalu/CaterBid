import React from 'react'
import prompts from './prompts.json'
// import TextTransition, { presets } from "react-text-transition";
// style={{
          //   backgroundImage:
          //     "linear-gradient(to bottom, rgba(23, 47, 130,0.9), rgba(84, 19, 138,0.8), rgba(138, 19, 73,0.4)), url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          //     backgroundSize : "cover",
          //     backgroundPosition : "center",
          //     backgroundRepeat : "no-repeat",
          // }}
        
const Mainsection = () => {
  let data = prompts.catchlines[Math.floor(Math.random() * prompts.catchlines.length)]
  return (
    <div className='flex flex-col items-center justify-center w-full h-full lg:flex lg:flex-row lg:justify-center lg:items-center md:flex md:flex-col' >
      <section className="flex items-center justify-center w-full h-full p-4 bg-black lg:w-1/2 md:h-full lg:h-screen">
          <div className="flex flex-col items-center justify-center w-5/6 p-2 text-center text-white border rounded-md outline lg:w-5/6 md:w-5/6 " >
            <p className="mb-4 text-5xl font-bold text-purple-700 font-mont">{data.heading}<br /></p>
            <p className="px-4 mb-4 text-2xl text-justify font-mont">{data.text}</p>
          </div>
        </section>
        <main className="grid grid-cols-2 gap-6 lg:w-1/2 bg-white lg:px-[calc(100vw/12)] px-4 w-full h-screen bg-opacity-60 items-center">
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="p-3 text-2xl font-mont">Are You a Caterer?</h1>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
              alt="caterer.png"
              className="h-20 mb-4"
              >
              </img>
              <button className="p-4 mt-4 font-semibold text-white bg-purple-700 rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
                Create a Caterer Profile
              </button>
            </div>
            <div className="flex flex-col items-center justify-center w-full p-4">
              <h1 className="p-3 text-2xl font-mont ">Are You a Customer?</h1>
              <img 
              src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
              alt="customer.png"
              className="h-20 mb-4"
              ></img>
              <button className="p-4 mt-4 font-semibold text-white bg-purple-700 rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
              Create User Profile
              </button>
            </div>
          </main>
        </div>
  )
}

export default Mainsection
