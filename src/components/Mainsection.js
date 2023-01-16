import React from 'react'
import prompts from './prompts.json'
import { Link } from 'react-router-dom'

const Mainsection = () => {
  let data = prompts.catchlines[Math.floor(Math.random() * prompts.catchlines.length)]
  return (
    <section
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(220, 229, 230, 0.4), rgba(0, 50, 35, 0.7)), url(https://images.unsplash.com/photo-1526894198609-10b3cdf45c52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
          }}
          className="flex flex-col items-center w-full h-screen pt-24 bg-black lg:py-12 justify-top">

          <div className='flex flex-col items-center justify-center w-full h-full'>
          <div className="w-full p-2 pt-4 mt-12 text-center text-white border-dashed border-2 lg:w-2/3 md:mt-22 md:w-2/3" >
            <p className="mb-4 text-5xl font-bold text-phorange font-mont">{data.heading}<br /></p>
            <p className="px-4 mb-4 text-2xl text-justify font-mont">{data.text}</p>
          </div>
          <main className="px-8 pt-4 pb-8 lg:w-2/3 lg:px-[calc(100vw/12)] h-fit grid grid-cols-2 gap-6 bg-white mt-12 mb-12 bg-opacity-60 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <h1 className="p-3 text-2xl font-mont">Are You a Caterer?</h1>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
              alt="caterer.png"
              className="h-20 mb-4"
              >
              </img>
              <button className="p-4 mt-4 transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
                <Link to="/CatererLogin">Create Caterer Profile</Link>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="p-3 text-2xl font-mont">Are You a Customer?</h1>
              <img 
              src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
              alt="customer.png"
              className="h-20 mb-4"
              ></img>
              <button className="p-4 mt-4 transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
              <Link to="/UserLogin">Create User Profile</Link>
              </button>
            </div>
            
          </main>
          </div>
        </section>
  )
}

export default Mainsection
