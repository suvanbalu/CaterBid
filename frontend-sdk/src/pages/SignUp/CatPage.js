import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Stepper from "../../components/Stepper";
import StepperControl from "../../components/StepperControl";
import Account from "./steps/Account";
import Details from "./steps/Details";
import Final from "./steps/Final";
import Payment from "./steps/Payment";
import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";

const CatPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Personal Details",
    "Business Details",
    "Signature Dishes",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Details />;
      case 2:
        return <Account/>;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <React.Fragment>
      <Navbar />
      
      <div className="grid-cols-1  w-full lg:flex flex-row items-center p-4 bg-white">
      <div className="h-auto flex flex-col items-center justify-center bg-no-repeat bg-cover bg-white rounded-l-2xl ">
          <div class=" invisible  lg:visible w-1/3 h-8 bg-gradient-to-r from-phorange absolute inset-y-32 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-48 left-0 "></div>
          <br></br>
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-64 left-0 "></div>
          <br></br>
          {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

          <div class="invisible  lg:visible w-72 h-8 bg-gradient-to-r from-phorange absolute inset-y-80 left-0 "></div>
          <br></br>
          <div className="text-7xl animate-bounce lg:animate-none lg:text-8xl text-black font-bold mx-auto  z-10 pt-20 px-10 lg:pl-48">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-green-500 ">
              CaterBid,
            </span>
            <br />a place for everyone
          </div>
          <div class="invisible lg:visible w-3/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-96 left-0 "></div>
          <br></br>

          <div class="invisible lg:visible w-72 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 "></div>
          <br></br>
          {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
          <div class="invisible  lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-[512px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-1/4 h-8 bg-gradient-to-r from-phorange absolute inset-y-[576px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-1/3 h-8 bg-gradient-to-r from-phorange absolute inset-y-[640px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-96 h-8 bg-gradient-to-r from-phorange absolute inset-y-[704px] left-0 "></div>
          <br></br>
          <div class="invisible lg:visible w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[768px] left-0 "></div>
          <br></br>
        </div>

        <div className="flex w-full lg:w-3/5 py-0 lg:py-10   bg-white rounded-2xl justify-center shadow-xl shadow-white">
          <div className="w-[80%]">
            <h2 className="text-3xl mb-8 font-semibold">Sign Up</h2>

            <div className="container horizontal mt-5">
              <Stepper steps={steps} currentStep={currentStep} />
            </div>

            <div className=" p-10 h-fit ">
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displayStep(currentStep)}
              </StepperContext.Provider>
            </div>
            {currentStep != steps.length && (
              <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CatPage;
