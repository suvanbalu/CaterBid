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
      
      <div className="flex flex-col lg:flex-row items-center lg:p-4 bg-white h-screen">
        <div className="w-full lg:w-[50vw] h-screen lg:flex flex-col items-center justify-center lg:p-12 bg-no-repeat bg-cover bg-white rounded-l-2xl mobile:p-[10px] ">
          <div class=" w-1/3 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-32 left-0 mobile:h-4 mobile:inset-y-[80px] mobile:w-[25%]"></div>
          <br></br>
          <div class=" w-5/12 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-48 left-0 mobile:h-4 mobile:inset-y-[110px] mobile:w-[36%]"></div>
          <br></br>
          <div class=" w-96 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-64 left-0 mobile:h-4 mobile:inset-y-[140px] mobile:w-[23%]"></div>
          <br></br>
          {/* <div class="relative w-[576px] h-[576px] bg-black rounded-full flex justify-center items-center text-center p-5 shadow-xl z-10 font-sans">
                  Make it simple, but significant.
              </div> */}

          <div class=" w-72 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-80 left-0 mobile:h-4 mobile:inset-y-[170px] mobile:w-[19%]"></div>
          <br></br>
          <div className="lg:text-8xl text-black font-bold mx-auto  z-10 pl-48 mobile:text-6xl mobile:pl-32 mobile:z-10 ">
            <span className=" text-transparent bg-gradient-to-r bg-clip-text from-blue-400 to-green-500 ">
              CaterBid,
            </span>
            <br />a place for everyone
          </div>
          <div class=" w-3/12 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-96 left-0 mobile:h-4 mobile:inset-y-[200px] mobile:w-[28%]"></div>
          <br></br>

          <div class=" w-72 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[448px] left-0 mobile:h-4 mobile:inset-y-[230px] mobile:w-[17%]"></div>
          <br></br>
          {/* <div class=" w-5/12 h-8 bg-gradient-to-r from-phorange absolute inset-y-[448px] left-0 " ></div><br></br> */}
          <div class=" w-96 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[512px] left-0 mobile:h-4 mobile:inset-y-[260px] mobile:w-[23%]"></div>
          <br></br>
          <div class=" w-1/4 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[576px] left-0 mobile:h-4 mobile:inset-y-[290px] mobile:w-[26%]"></div>
          <br></br>
          <div class=" w-1/3 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[640px] left-0 mobile:h-4 mobile:inset-y-[320px] mobile:w-[29%]"></div>
          <br></br>
          <div class=" w-96 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[704px] left-0 mobile:h-4 mobile:inset-y-[350px] mobile:w-[23%]"></div>
          <br></br>
          <div class=" w-5/12 lg:h-8 bg-gradient-to-r from-phorange absolute lg:inset-y-[768px] left-0 mobile:h-4 mobile:inset-y-[380px] mobile:w-[39%]"></div>
          <br></br>
        </div>

        <div className="flex w-full lg:w-3/5 lg:py-4  px-2 h-full rounded-2xl justify-center shadow-xl shadow-white">
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
