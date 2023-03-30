import React, { useState } from 'react';
import Inputfield from "../../components/TextInput"
import { Link } from "react-router-dom";

const CatererLogin = () => {
    const [Mailid, setMailid] = useState("");
    const [pwd, setpwd] = useState("");
    return (
        <div className="h-screen w-full flex fixed bg-white ">
        <div style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(230, 230, 230, 0.7), rgba(230, 230, 230, 0.9)), url(https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
        className="flex flex-col items-center mobile:w-full mobile:h-full  mobile:pb-20 mobile:pt-20 bg-white lg:py-0">
        <div className="w-full h-1 bg-phorange"></div>

          <div className="flex flex-col lg:flex-row w-full bg-transparent items-center justify-center mx-auto overflow-hidden p-28">
            <div className="flex w-2/3 h-fit rounded-3xl shadow-md">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-black rounded-l-2xl"
              
            >
              <img
                  src="\catPic.png"
                  className="px-1 sm:h-64 mobile:h-8"
                  alt="logo"
                />
            </div>
            <div style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=1.00xw:0.753xh;0,0&resize=980:*)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
              
          }}
              className="flex w-full lg:w-1/2 py-16 px-12 bg-slate-300 rounded-r-2xl justify-center">
              <div className="w-[90%]">
              <h2 className="text-3xl mb-8 font-semibold text-phorange">Caterer login</h2>
              <p className="mb-6 text-white" >
                Login in to your account ! 
              </p>
              <form action="#">
                
                <div className="mb-2 text-slate-300">
                    <Inputfield
                        valueState={[Mailid, setMailid]}
                        title="Caterer Username"
                        placeholder="Enter username"
                    />
                    </div>
                    <div className="mb-2 text-slate-300">
                    <Inputfield
                        valueState={[pwd, setpwd]}
                        title="Password"
                        placeholder="Enter Password"
                        type='password'
                    />
                </div>
                <button className="text-xs text-phorange hover:underline">
                        Forget Password?
                </button>
        
                <div class="mt-5">
                  <button class="w-full py-3 text-center text-white font-semibold rounded hover bg-phorange hover:bg-orange-600 active:bg-red-500 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 ">
                    Login
                  </button>
                </div>
    
              </form>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default CatererLogin;