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
    <div className='lg:flex lg:flex-row lg:justify-center lg:items-center flex flex-col h-full w-full justify-center items-center' >
      <section className="lg:w-1/2 w-full h-full md:h-full lg:h-screen flex justify-center items-center bg-black p-4">
          <div className="flex flex-col items-center justify-center text-white text-center border rounded-md outline p-2 lg:w-5/6 md:w-5/6 w-5/6 " >
            <p className="text-5xl font-bold text-phorange font-mont mb-4">{data.heading}<br /></p>
            <p className="px-4 text-2xl font-mont text-justify mb-4">{data.text}</p>
          </div>
        </section>
        <main className="grid grid-cols-2 gap-6 lg:w-1/2 bg-white lg:px-[calc(100vw/12)] px-4 w-full h-screen bg-opacity-60 items-center">
            <div className="flex flex-col justify-center items-center p-4">
              <h1 className="text-2xl p-3 font-mont">Are You a Caterer?</h1>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
              alt="caterer.png"
              className="h-20 mb-4"
              >
              </img>
              <button className="p-4 bg-phorange font-mont mt-4 rounded shadow hover:text-white hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
                Create a Caterer Profile
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <h1 className="text-2xl p-3 font-mont ">Are You a Customer?</h1>
              <img 
              src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
              alt="customer.png"
              className="h-20 mb-4"
              ></img>
              <button className="p-4 bg-phorange mt-4 rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
              Create User Profile
              </button>
            </div>
          </main>
        </div>
  )
}

export default Mainsection
