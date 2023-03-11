import React from "react"
import Rating from '@mui/material/Rating';
import { BiBed } from "react-icons/bi";
import { SiThumbtack } from "react-icons/si";
import { TbAlertTriangle, TbCertificate, TbChevronUpLeft, TbClick, TbCSharp, TbCurrencyRupee, TbFilePencil, TbSwordOff, TbThumbDown, TbThumbUp } from "react-icons/tb";
const BidPopup = ({name,num,description,src,bids,selected,eventname,eventdate})=>{
    return(
        <div>
              <p className="font-bold text-2xl m-2"></p>
              <label for={`my-modal${num}`}>
                <div class="p-5 bg-white shadow rounded-xl transition ease-in-out flex items-center delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-black hover duration-300 ">
                {!src&&<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>}
                <div>
                  <img src={src}></img>
                </div>
                  Event {num}{" "}
                </div>
              </label>

              <input type="checkbox" id={`my-modal${num}`} class="modal-toggle" />
              <div className="modal w-screen">
              <div class="modal-box w-11/12 max-w-5xl h-2/3">
                  <h3 class="font-bold text-lg ">Event {num}</h3>
                  {console.log(num)}
                  <p class="py-4">
                    <div className="text-4xl text-center text-black  p-3 rounded-xl">
                        {name}
                    </div>
                    <div className="text-center text-xl"> 
                      {description}
                    </div>

                    <div class="inline-flex items-center justify-center w-full">
                      <span class="w-96 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"> </span>
                    </div>

                    <div className="text-center font-semibold p-4">
                      Current Bids
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-3">
                      <div className="inline-flex items-center justify-center w-full">
                      <div className="bg-white border-slate-600 border-2  shadow-1 p-5 rounded-br-[10px] rounded-tl-[50px] w-64 max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                        
                        <div className="flex gap-x-2">
                        {!src&&<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8 mb-3">
                            <svg class="absolute w-24 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>}
                        <div>
                        <div className="mt-1 text-center font-semibold">Bidder 1</div>
                        <div className="text-center">Coimbatore</div>
                        <div class="mt-1 flex items-center ">
                        <Rating
                        name="read-only"
                        value={4}
                        size="small"
                        readOnly>
                        </Rating>
                        
                        </div>   
                        </div>
                        </div>
                          <div className="text-xs ml-1 mb-4">"Food is our common ground, a thing which universal experience"</div>
                          <div className="ml-3 mb-4 flex gap-x-3 text-sm">
                          <div ><TbThumbUp/></div><div>54</div>
                          <div><TbThumbDown/></div><div>12</div>
                          <div><TbSwordOff/></div><div>certified</div>

                          </div>
                          <div className="ml-1 flex gap-x-7 text-sm">
                            <div className="text-base font-semibold mb-4 mt-3 flex text-green-600"><TbCurrencyRupee/>10000<div></div></div>
                            <button type="button" className="text-white h-12 bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-lg text-xs px-6 py-2 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                Select bid
                                <svg aria-hidden="true" class="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                          </div>

                    </div>
                      </div>


                      <div className="inline-flex items-center justify-center w-full">

                      <div className="bg-white border-slate-600 border-2 shadow-1 p-5 rounded-br-[10px] rounded-tl-[50px] w-64 max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                        
                        <div className="flex gap-x-2">
                        {!src&&<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8 mb-3">
                            <svg class="absolute w-24 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>}
                        <div>
                        <div className="mt-1 text-center font-semibold">Bidder 1</div>
                        <div className="text-center">Coimbatore</div>
                        <div class="mt-1 flex items-center ">
                        <Rating
                        name="read-only"
                        value={4}
                        size="small"
                        readOnly>
                        </Rating>
                        
                        </div>   
                        </div>
                        </div>
                          <div className="text-xs ml-1 mb-4">"Food is our common ground, a thing which universal experience"</div>
                          <div className="ml-3 mb-4 flex gap-x-3 text-sm">
                          <div ><TbThumbUp/></div><div>54</div>
                          <div><TbThumbDown/></div><div>12</div>
                          <div><TbSwordOff/></div><div>certified</div>

                          </div>
                          <div className="ml-1 flex gap-x-7 text-sm">
                            <div className="text-base font-semibold mb-4 mt-3 flex text-green-600"><TbCurrencyRupee/>10000<div></div></div>
                            <button type="button" className="text-white h-12 bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-lg text-xs px-6 py-2 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                Select bid
                                <svg aria-hidden="true" class="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                          </div>

                    </div>
                      </div>
                      <div className="inline-flex items-center justify-center w-full">

                      <div className="bg-white border-slate-600 border-2  shadow-1 p-5 rounded-br-[10px] rounded-tl-[50px] w-64 max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                        
                        <div className="flex gap-x-2">
                        {!src&&<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8 mb-3">
                            <svg class="absolute w-24 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>}
                        <div>
                        <div className="mt-1 text-center font-semibold">Bidder 1</div>
                        <div className="text-center">Coimbatore</div>
                        <div class="mt-1 flex items-center ">
                        <Rating
                        name="read-only"
                        value={4}
                        size="small"
                        readOnly>
                        </Rating>
                        
                        </div>   
                        </div>
                        </div>
                          <div className="text-xs ml-1 mb-4">"Food is our common ground, a thing which universal experience"</div>
                          <div className="ml-3 mb-4 flex gap-x-3 text-sm">
                          <div ><TbThumbUp/></div><div>54</div>
                          <div><TbThumbDown/></div><div>12</div>
                          <div><TbSwordOff/></div><div>certified</div>

                          </div>
                          <div className="ml-1 flex gap-x-7 text-sm">
                            <div className="text-base font-semibold mb-4 mt-3 flex text-green-600"><TbCurrencyRupee/>10000<div></div></div>
                            <button type="button" className="text-white h-12 bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-lg text-xs px-6 py-2 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                Select bid
                                <svg aria-hidden="true" class="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                          </div>

                    </div>
                      </div>
                    </div>

                    {/* <div className="bg-slate-400 shadow-1 p-5 rounded-br-[10px] rounded-tl-[50px] w-64 max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                        
                        <div className="flex gap-x-2">
                        {!src&&<div class="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-8 mb-3">
                            <svg class="absolute w-24 h-24 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>}
                        <div>
                        <div className="mt-1 text-center font-semibold">Bidder 1</div>
                        <div className="text-center">Coimbatore</div>
                        <div class="mt-1 flex items-center ">
                        <Rating
                        name="read-only"
                        value={4}
                        size="small"
                        readOnly>
                        </Rating>
                        
                        </div>   
                        </div>
                        </div>
                          <div className="text-xs ml-1 mb-4">"Food is our common ground, a thing which universal experience"</div>
                          <div className="ml-3 mb-3 flex gap-x-3 text-sm">
                          <div ><TbThumbUp/></div><div>54</div>
                          <div><TbThumbDown/></div><div>12</div>
                          <div><TbSwordOff/></div><div>certified</div>

                          </div>
                          <div className="ml-2 flex gap-x-8 text-sm">
                            <div className="text-base font-semibold mb-4 mt-3 flex text-green-600"><TbCurrencyRupee/>10000<div></div></div>
                            <button type="button" className="text-white h-12 bg-slate-300 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-lg text-xs px-6 py-2 text-center inline-flex items-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                Select bid
                                <svg aria-hidden="true" class="w-3 h-3 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                          </div>

                    </div> */}

                  </p>
                  <div class="modal-action">
                    <label for={`my-modal${num}`} class="btn">
                      close
                    </label>
                  </div>
                </div>
            </div>
        </div>

    )
}

export default BidPopup;