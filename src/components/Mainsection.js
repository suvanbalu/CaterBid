import React from 'react'
import prompts from './prompts.json'

const Mainsection = () => {
  let data = prompts.catchlines[Math.floor(Math.random() * prompts.catchlines.length)]
  return (
    <section
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(23, 47, 130,0.9), rgba(84, 19, 138,0.8), rgba(138, 19, 73,0.4)), url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
          }}
          className="w-full h-full flex flex-col justify-top items-center">

          <div className='flex flex-col items-center justify-center w-screen h-screen'>
          <div className="lg:w-2/3 md:mt-22 pt-4 text-white text-center border outline p-2 w-full md:w-2/3" >
            <p className="text-5xl font-bold text-phorange font-mont mb-4">{data.heading}<br /></p>
            <p className="px-4 text-2xl font-mont text-justify mb-4">{data.text}</p>
          </div>
          <main className="px-8 pt-4 pb-8 mb-4 lg:w-2/3 lg:px-[calc(100vw/12)] h-fit grid grid-cols-2 gap-6 bg-white mt-12 bg-opacity-60 rounded-lg">
            <div className="flex flex-col justify-center items-center">
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
            <div className="flex flex-col items-center">
              <h1 className="text-2xl p-3 font-mont">Are You a Customer?</h1>
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
        </section>
  )
}

export default Mainsection