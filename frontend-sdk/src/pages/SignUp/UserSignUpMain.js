import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import Inputfield from "../../components/TextInput";
import axios from 'axios';



const UserSignUpMain = () => {
const[Firstname,setFirstname] = useState("");
const [Surname,setSurname] = useState("");
const [Phno,setPhno] = useState("");
const [Email,setEmail] = useState("");
const [Pwd,setPwd] = useState("");
const [Uname,setUname] = useState("");


const handleClick =event => {
  event.preventDefault()
  console.log(Phno);
  console.log(Firstname);
  console.log(Surname);


  axios
      .post('http://localhost:3001/auth/usignup', {
        firstname:Firstname,
        lastname: Surname,
        email: Email,
        password: Pwd,
        phone: Phno,
        username: Uname,
      })
      .then((response) => {
        console.log(response);
      });
  console.log("1")
  };
  
    return(
        <React.Fragment>
      <Navbar />
      
      <div className="flex flex-row items-center p-4 bg-white">
        
            <div className="w-full lg:w-[50vw] h-screen flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-white rounded-l-2xl ">
             
            
              <div class=" w-1/3 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-32 left-0 " ></div><br></br>
              <div class=" w-5/12 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-48 left-0 " ></div><br></br>
              <div class=" w-96 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-64 left-0 " ></div><br></br>
              {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

              
              <div class=" w-72 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-80 left-0 " ></div><br></br>
              <div className = "text-8xl text-black font-bold mx-auto  z-10 pl-48">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-phorange to-green-500 ">
                CaterBid,
                </span>
                <br/>
                a place for everyone
              </div>
              <div class=" w-3/12 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-96 left-0 " ></div><br></br>
              
              
              <div class=" w-72 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[448px] left-0 " ></div><br></br>
              {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
              <div class=" w-96 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[512px] left-0 " ></div><br></br>
              <div class=" w-1/4 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[576px] left-0 " ></div><br></br>
              <div class=" w-1/3 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[640px] left-0 " ></div><br></br>
              <div class=" w-96 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[704px] left-0 " ></div><br></br>
              <div class=" w-5/12 h-8 bg-gradient-to-r from-slate-400 absolute inset-y-[768px] left-0 " ></div><br></br>

             

            </div>
            
             
              
            

            

            
            <div className="flex w-1/2 lg:w-3/5 py-10 px-2  bg-white rounded-2xl justify-center shadow-xl shadow-white">
              <div className="w-[80%]">
              <h2 className="text-3xl mb-8 font-semibold">Sign Up</h2>
              <p className="mb-6">
                Create your account. It's free and only takes a minute!
              </p>
              <form >
                <div className="grid grid-cols-2 gap-5">
                  <Inputfield
                    type="text"
                    valueState={[Firstname, setFirstname]}
                    placeholder="Firstname"
                    className="border-2 border-gray-300 py-1 px-2 rounded"
                  />
                  <Inputfield
                    type="text"
                    valueState={[Surname,setSurname]}
                    placeholder="Surname"
                    className="border-2 border-gray-300 py-1 px-2 rounded"
                  />
                </div>
                <div className="mt-5">
                  <Inputfield
                    type="tel"
                    placeholder="Phone.no"
                    valueState={[Phno,setPhno]}
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <Inputfield
                    type="text"
                    placeholder="Email"
                    valueState={[Email,setEmail]}
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <Inputfield
                    type="password"
                    placeholder="Password"
                    valueState={[Pwd,setPwd]}
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  />
                  </div>
                  <div className="mt-5">
                  <Inputfield
                    type="text"
                    placeholder="username"
                    valueState={[Uname,setUname]}
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5 ">
                  <Inputfield
                    type="password"
                    placeholder="Confirm Password"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  />
                </div>
                <div className="mt-5">
                  <Inputfield
                    type="checkbox"
                    className="border border-gray-400 mr-1"
                  />
                  <span>
                    <a> </a>I accept the{" "}
                    <a className="text-grey-500 font-semibold">
                      {" "}
                      Terms of Use
                    </a>{" "}
                    &{" "}
                    <a className="text-grey-500 font-semibold">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <div class="mt-5">
                  <button class="w-full py-3 text-center text-white font-semibold rounded hover bg-blue-300 hover:bg-blue-500 active:bg-blue-600 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 " onClick = {handleClick}>
                    Sign Up Now
                  </button>
                </div>
                <div class="text-red-600 font-semibold text-align:center">
                  <button class="w-full py-2 text-center text-red-500 font-semibold text-align:center hover hover:text-red-600" >
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