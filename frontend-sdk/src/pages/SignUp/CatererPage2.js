import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const CatererPage2 = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <div className="h-screen w-full flex fixed ">
      <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=1.00xw:0.753xh;0,0&resize=980:*)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
              
          }}
          className="flex flex-col items-center mobile:w-full mobile:h-full p-4 mobile:pb-20 mobile:pt-20 bg-black lg:py-0  ">
          <div className="flex flex-col lg:flex-row w-full bg-transparent items-center justify-center mx-auto overflow-hidden p-28">
            <div className="flex w-fit h-fit rounded-2xl shadow-md bg-white justify-center">
        
            {/* <div className="flex w-full lg:w-1/2 py-16 px-12 bg-white rounded-r-2xl "> */}
              <div className="w-[80%]">
                <h2 className="text-3xl mb-8 font-semibold">Step 2</h2>
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
            {/* </div> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatererPage2;
