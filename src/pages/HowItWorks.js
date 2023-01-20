import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const HowItWorks = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section
        className="h-full w-full p-4 flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom left, rgba(220, 229, 230, 0.1), rgba(0, 50, 35, 0.9)), url(https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" how_it_works_text font-mont text-white text-center">
          <h1 class="font-extrabold tracking-wide text-white text-5xl pt-20">
            How does CaterBid work?
          </h1>
        </div>

        <div className="desc_text text-white text-center">
          <h1 class="font-mont tracking-tight text-white text-3xl pt-10">
            <p class="p-2 break-words">It's as simple as an order form.</p>
            <p>
              You tell us what you want, and the best caterers compatible with
              your needs will find you. Quickly and easily. No more searching
              through hundreds of caterers. No more calling around. No more
              wasting time.
            </p>
          </h1>
        </div>

        <div className="desc2_text text-white text-center">
          <h2 class="font-mont tracking-tight text-6xl p-10 text-white">
            You Post. Caterers Bid. You Choose.
          </h2>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className=" pt-8 pb-8 px-8  w-fit h-fit grid grid-cols-3 bg-white mt-12 mb-12 bg-opacity-60 rounded-lg items-center justify-center place-items-center">
            <div className="pl-8 pr-8 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2073/2073019.png"
                alt="step1.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">1. Sign Up or Log In</h1>
            </div>
            <div className="pl-8 pr-8 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8131/8131463.png"
                alt="step2.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">2. Post Your Event</h1>
            </div>
            <div className="pl-8 pr-8 flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3386/3386941.png"
                alt="step3.png"
                className="h-20 mb-4"
              ></img>
              <h1 className=" text-2xl font-mont">3. Pick the best bid</h1>
            </div>
          </div>
        </div>
        <div>
          <button className="p-4 mt-4 transition ease-in-out delay-150 hover:scale-110 font-semibold text-black bg-phorange rounded shadow font-mont hover:text-white hover:bg-orange-600 hover:rounded-md size-5px">
            <Link to="/HowItWorksCaterer">I'm a caterer</Link>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HowItWorks;
