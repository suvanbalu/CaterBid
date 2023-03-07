import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const UserSignUpMain = () => {
  
    return(
        <React.Fragment>
      <Navbar />
      
      <div className="flex flex-row items-center p-4 bg-white">
        
            <div className="w-full lg:w-[50vw] h-screen flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-white rounded-l-2xl ">
             
            
              <div class=" w-1/3 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-32 left-0 " ></div><br></br>
              <div class=" w-5/12 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-48 left-0 " ></div><br></br>
              <div class=" w-96 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-64 left-0 " ></div><br></br>
              {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

              
              <div class=" w-72 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-80 left-0 " ></div><br></br>
              <div className = "text-8xl text-black font-bold mx-auto  z-10 pl-48">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-phorange to-green-500 ">
                CaterBid,
                </span>
                <br/>
                a place for everyone
              </div>
              <div class=" w-3/12 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-96 left-0 " ></div><br></br>
              
              
              <div class=" w-72 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[448px] left-0 " ></div><br></br>
              {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
              <div class=" w-96 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[512px] left-0 " ></div><br></br>
              <div class=" w-1/4 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[576px] left-0 " ></div><br></br>
              <div class=" w-1/3 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[640px] left-0 " ></div><br></br>
              <div class=" w-96 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[704px] left-0 " ></div><br></br>
              <div class=" w-5/12 h-8 bg-gradient-to-r from-blue-400 absolute inset-y-[768px] left-0 " ></div><br></br>

             

            </div>
            
             
              
            

            

            
            <div className="flex w-1/2 lg:w-3/5 py-10 px-2  bg-white rounded-2xl justify-center shadow-xl shadow-white">
              <div className="w-[80%]">
              <h2 className="text-3xl mb-8 font-semibold">Sign Up</h2>
              <p className="mb-6">
                Create your account. It's free and only takes a minute!
              </p>
              <form action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="border-2 border-gray-300 py-1 px-2 rounded"
                  ></input>
                  <input
                    type="text"
                    placeholder="Surname"
                    className="border-2 border-gray-300 py-1 px-2 rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="tel"
                    placeholder="Phone.no"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5 ">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
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
                  <button class="w-full py-3 text-center text-white font-semibold rounded hover bg-blue-300 hover:bg-blue-500 active:bg-red-500 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 ">
                    Sign Up Now
                  </button>
                </div>
                <div class="text-red-600 font-semibold text-align:center">
                  <button class="w-full py-2 text-center text-red-500 font-semibold text-align:center hover hover:text-red-600">
                    <Link to="/CatPage">I'm a Caterer </Link>
                  </button>
                </div>
              </form>
             
            </div>
            </div>
            </div>
    </React.Fragment>
    )
    
    
  
}

export default UserSignUpMain;