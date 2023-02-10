import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const CatPage = ()=>{
    return(
        <React.Fragment>
      <Navbar />
      
      <div className="h-screen w-full flex fixed ">
      <div
          
          className="flex flex-col items-center mobile:w-full mobile:h-full p-4 mobile:pb-20 mobile:pt-20 bg-black lg:py-0  ">
          <div className="flex flex-col lg:flex-row w-full bg-transparent items-center justify-center mx-auto overflow-hidden p-28">
            <div className="flex w-fit h-fit rounded-3xl shadow-md">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-white rounded-l-2xl"
              
            >
              <h1 className="text-6xl mb-3 text-slate-400 font-semibold">
                Seriously
              </h1>
              <div>
                <p className="text-xl text-slate-400 font-semibold ">
                  bro
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 py-16 px-12 bg-white rounded-r-2xl justify-center">
              <div className="w-[90%]">
              <h2 className="text-3xl mb-8 font-semibold">Sign Up</h2>
              <p className="mb-6">
                Create your account. It's free and only takes a minute!
              </p>
              <form action="#">
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="FSSAI License"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="dropdown"
                    placeholder="Type of Business"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>


                    <label for="countries" class="block mb-2 text-sm font-medium text-slate-300 dark:text-white">Type of Business</label>
                    <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                
                    <option value="US">Private limited company</option>
                    <option value="CA">limited liability partnership</option>
                    <option value="FR">one -person company</option>
                
                    </select>
                </div>
                
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400 mr-1"
                  ></input>
                  <span>
                    <a> </a>I accept the{" "}
                    <a href="#" className="text-grey-500 font-semibold">
                      {" "}
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a href="" className="text-grey-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div class="mt-5">
                  <button class="w-full py-3 text-center text-white font-semibold rounded hover bg-phorange hover:bg-orange-600 active:bg-red-500 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150">
                    Sign Up Now
                  </button>
                </div>
              </form>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    )
}

export default CatPage;