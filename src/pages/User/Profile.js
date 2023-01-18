import React from 'react'

const Profile = () => {
  return (
    <div>
      <nav
        style={{
            position: "sticky",
            top: 0
        }} 
        className='bg-white px-4 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between space-between'>
           </nav>
            <div className='flex items-center w-1/3 space-x-4'>
                <img
                    src = "https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                    className='px-1 h-10 lg:h-14'
                    alt="logo"
                >
                </img>
                <h1 className = "m-4 text-2xl font-bold text-red-500"> CaterBid </h1>
                
            </div>

            <div>
              <h1>
                <br>
                
                </br>
              </h1>
            </div>
            
            
            <div className='main-grid  grid grid-cols-3 text-center lg:grid-cols-5 m-4 h-fit w-full justify-center p-2 space-x-10'>
            <div className='container emp-profile  shadow-lg bg-white-500 rounded-2xl border-2 border-black border-dotted flex p-2 box-content '>
              <form method=''>
                <div className='row'>
                  <div className='w-full h-full flex justify-center colummn'>
                    <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-t-full p-5"/>
                  </div>

                  <div className='flex-col'>
                  <div className='profie head '>
                    <h1 className='w-full h-full flex justify-center'>Peter Kinley</h1>
                    <h2 className='w-full h-full flex justify-center'>Web Developer</h2>
                    <p className='profile-rating mt-3 mb-5 w-full h-full flex justify-center'>User ID :<span> #215</span></p>
                  </div>
                </div>
                </div>
              </form>
            </div>

            <div className='container emp-profile  shadow-lg bg-white-500 rounded-2xl  border-black border-dotted flex justify-center h-48 w-70 p-4 border-2 text-xl'>
              
              <form method=''>
                <div className='row p-2'>
                <div className='flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Full Name :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Email_ID :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Phone :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Address :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div><div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Preferences :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                  
                </div>
                </div>
              </form>
            </div>

            </div>
            
    

            <div className='main-grid  grid grid-cols-3 text-center lg:grid-cols-5 m-4 h-fit w-full justify-center p-2 space-x-8'>
            <div className='container emp-profile  shadow-lg bg-white-500 rounded-2xl border-2 border-black border-dotted flex p-2 box-content '>
            <form method=''>
                <div className='row'>
                  <div className='flex-col'>
                  <div className='profie head '>
                    <h1 className='w-full h-full flex justify-center'>Add New Post</h1>
                  </div>
                  
                  <div class="flex items-center justify-center w-full h-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-60 h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                        <div class="flex flex-col items-center justify-center pt- pb-6">
                            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
                  
                </div>
                </div>
              </form>
            </div>
            </div>

            <div className='main-grid  grid grid-cols-3 text-center lg:grid-cols-5 m- h-fit w-full justify-center p-2 space-x-32'>
            
            <div className='container emp-profile  shadow-lg bg-white-500 rounded-2xl  border-black border-dotted flex justify- h-fit w-fit p-4 border-2 text-lg'>
              
              <form method=''>
                <div className='row p-2'>
                <div className='flex justify-left px-20'>
                    <div className='flex justify-left'>
                      <label> No.of eventd posted :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> No.of events pending:</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> No.of events successful :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  {/* <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Address :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Preferences :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                  
                </div> */}
                </div>
              </form>
            </div>

            <div className='container emp-profile  shadow-lg bg-white-500 rounded-2xl  border-black border-dotted flex justify-center h-48 w-70 p-4 border-2 text-xl '>
              
              <form method=''>
                <div className='row p-2'>
                <div className='flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Full Name :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Email_ID :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Phone :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Address :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div><div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Preferences :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                  
                </div>
                </div>
              </form>
            </div>

            
            </div>

            
            
            {/* <div className='main-grid flex-col'>
 
            <ul class="nav nav-tabs">

                      <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                      </li>
            </ul>

            </div> */}

            

            {/* <div className='pl-5 about-info'>
              <div className='tab-content profile-tab' id="myTabContent">
                <div className='tab-pane fade show active:' id='home' role='tabpanel' aria-labelledby ="home-tab">



                 <div className='flex justify-left px-20 '>
                    <div className='flex justify-start'>
                      <label> Full Name :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Email_ID :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Phone :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  <div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Address :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div><div className=' flex justify-left px-20'>
                    <div className='flex justify-start'>
                      <label> Preferences :</label>
                    </div>
                    <div className=' flex justify-center'>
                      <p>  bdfkshbfshdk</p>
                    </div>
                    
                  </div>
                  </div>

                </div>

              </div> */}

<div class="container m-auto p-4">
  <div class="flex flex-row space-x-4">
    
    <div class="flex w-full flex-col space-y-4 bg-red-200">
      <div class="h-40 rounded-lg bg-red-500"></div>
      <div class="h-32 rounded-lg bg-red-500"></div>
      <div class="h-60 rounded-lg bg-red-500"></div>
    </div>
    
    <div class="flex w-full flex-col space-y-4 bg-blue-200">
      <div class="h-12 rounded-lg bg-blue-500"></div>
      <div class="h-72 rounded-lg bg-blue-500"></div>
      <div class="h-48 rounded-lg bg-blue-500"></div>
    </div>
    
    <div class="flex w-full flex-col space-y-4 bg-green-200">
      <div class="h-28 rounded-lg bg-green-500"></div>
      <div class="h-40 rounded-lg bg-green-500"></div>
      <div class="h-64 rounded-lg bg-green-500"></div>
    </div>
  </div>
</div>



            </div>
      
    

  )
}



export default Profile
