import React from "react"
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
                      <div className="inline-flex items-center justify-center w-full">1</div>
                      <div className="inline-flex items-center justify-center w-full">2</div>
                      <div className="inline-flex items-center justify-center w-full">3</div>
                    </div>

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