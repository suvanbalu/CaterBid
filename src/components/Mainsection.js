import React from 'react'

const Mainsection = () => {
  return (
    <section
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(230, 135, 11,01), rgba(230, 135, 11,0.8), rgba(230, 135, 11,0.4)), url(https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              backgroundSize : "cover",
              backgroundPosition : "center",
              backgroundRepeat : "no-repeat",
          }}
          className="w-full h-screen flex flex-col justify-top items-center"
        >
          <div className="lg:w-2/3 m-4 pt-12 " >
            <p className="text-white text-center border outline p-4 ">
            <p className="text-5xl font-bold text-black">"Looking for the perfect catering service for your next event?<br /><br/></p>
            <p className="px-4 text-2xl tracking-wide font-semibold text-justify">Look no further! 
            Our website connects you with top-rated catering professionals, all bidding to earn your business. 
            Let the culinary competition BEGIN!"</p>
            </p>
          </div>
          <main className="px-8 py-4 lg:px-[calc(vw/12)] grid grid-cols-2 gap-6 bg-white mt-12 bg-opacity-60 rounded-lg">
            <div className="flex flex-col justify-center items-center">
              <text className="text-2xl p-2 font-semiboldtracking-wide">Are You a Caterer?</text>
              <img
              src="https://cdn-icons-png.flaticon.com/512/1940/1940899.png"
              alt="caterer.png"
              className="h-16 mb-4"
              >
              </img>
              <button className="p-4 bg-charcoal rounded shadow hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
                Create a Caterer Profile
              </button>
            </div>
            <div className="flex flex-col items-center">
              <text className="text-2xl p-2 tracking-wide">Are You a Customer?</text>
              <img 
              src="https://cdn-icons-png.flaticon.com/512/4149/4149881.png"
              alt="customer.png"
              className="h-16 mb-4"
              ></img>
              <button className="p-4 bg-charcoal rounded shadow hover:bg-orange-600 hover:rounded-md text-black font-semibold size-5px">
              Create User Profile
              </button>
            </div>
            
          </main>
        </section>
  )
}

export default Mainsection
