import React from "react";
import Navbar from "../../components/Navbar";
import Usercount from "../../components/usercount";
import BidPopup from "../../components/bidpopup";
import { BiBed } from "react-icons/bi";
import { SiThumbtack } from "react-icons/si";
import Inputfield from "../../components/TextInput";
import {
  TbAlertTriangle,
  TbCertificate,
  TbChevronUpLeft,
  TbClick,
  TbCSharp,
  TbCurrencyRupee,
  TbFilePencil,
  TbSwordOff,
  TbThumbDown,
  TbThumbUp,
} from "react-icons/tb";
import Index from "../../components/carousel";

const CatererHome = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className=" Headline h-1/3 w-full bg-red-700 flex items-center justify-between px-24">
        <div className="w-1/2">
          <p className="text-white tracking-wide text-[80px] font-bold mb-3">
            Discover & Bid
          </p>
          <p className="text-orange-300 text-2xl font-semibold ">
            From wide range of events posted by users!
          </p>
        </div>
        <div className="Count flex w-2/3 bg-white h-full items-center">
          <Usercount ncaterer="352" nuser="600" nbid="20156" nevent="1032" />
        </div>
      </div>

      <div className="flex cols grid-cols-5 mt-10 ml-10">
        <label htmlFor="my-modal-4" className="btn h-36 w-96 bg-slate-300 ">
          <div className="flex flex-cols">
            <div class="relative w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 -left-[20px]">
              <svg
                class="absolute w-28 h-28 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="p-4">
              <div className="text-center text-2xl font-semibold">
                Post Headline
              </div>
              <div className="text-center mb-2">Username</div>
              <div className="text-center">Date</div>
            </div>
          </div>
        </label>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative max-w-5xl h-[700px]" htmlFor="">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">Post Headline</h3>
              <h4 className="text-lg font-bold">Last Date</h4>
            </div>
            <div className=" w-full h-54 rounded-lg mt-10">
              <div className="text-4xl text-center text-black  p-3 rounded-xl">
                Mr.blah blah blah
              </div>
              <div className="text-center text-black text-xl">biryani</div>

              <div class="inline-flex items-center justify-center w-full mb-5">
                <span class="w-[824px] h-px my-5 bg-gray-200 border-0 dark:bg-gray-700">
                  {" "}
                </span>
              </div>

              <div className="flex w-full">
                <div class="Review flex flex-cols items-top justify-left w-1/2 h-[275px]  overflow-y-auto overflow-x-hidden pl-6">
                  <div class="ratingcomp flex flex-col justify-center w-96 p-4  ">
                    <div className="text-xl font-semibold mb-6 ml-2">
                      Bids so far
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 1</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 2</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 3</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 4</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 5</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-300 shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 mb-2 justify-between">
                      <div>bid 6</div>
                      <div className="text-base font-semibold flex text-green-600 items-center">
                        <TbCurrencyRupee />
                        10000<div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 mx-6">
                  <div className="bg-slate-300 h-[275px] w-full rounded-xl ml-3 p-4">
                    <div className="ml-4 text-3xl font-semibold ">
                      Provide your bids
                    </div>

                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Enter your bid :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="mt-2">
                      <Inputfield
                        type="text"
                        placeholder="Enter your pitch :"
                        className="border-gray-300 py-1 px-2 w-full rounded"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button class=" mr-2 mt-4  w-[90px] py-3 text-center text-white font-semibold rounded-xl hover bg-slate-600 hover:bg-slate-500 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-500 duration-50 transition ease-in-out delay-150 ">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </label>
      </div>
      <Index />
    </div>
  );
};

export default CatererHome;
