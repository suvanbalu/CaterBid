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
          className="w-full h-full flex flex-col justify-top items-center mb-"
        >
          <div className="lg:w-2/3 mt-12 pt-4 text-white text-center border outline p-2 " >
            <p className="text-5xl font-bold text-charcoal mb-4">{data.heading}<br /></p>
            <p className="px-4 text-2xl tracking-wide font-semibold text-justify mb-4">{data.text}</p>
          </div>
          <main className="px-8 pt-4 pb-8 mb-4 lg:px-[calc(100vw/12)] grid grid-cols-2 gap-6 bg-white mt-12 bg-opacity-60 rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-2xl p-3 font-semiboldtracking-wide">Are You a Caterer?</h1>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
              alt="caterer.png"
              className="h-20 mb-4"
              >
              </img>
              <button className="p-4 bg-charcoal rounded shadow hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
                Create a Caterer Profile
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl p-3 tracking-wide">Are You a Customer?</h1>
              <img 
              src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
              alt="customer.png"
              className="h-20 mb-4"
              ></img>
              <button className="p-4 bg-charcoal rounded shadow hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
              Create User Profile
              </button>
            </div>
            
          </main>
        </section>
  )
}

export default Mainsection
