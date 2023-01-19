// import React, { useState } from 'react';
// import Inputfield from "../../components/TextInput"

// const UserSignUp = () => {
//     const [FirstName,setFirstName] = useState("");
//     const [LastName,setLastName] = useState("");
//     const [PhoneNo, setphno] = useState("");
//     const [Mailid, setMailid] = useState("");
//     const [Password, setpwd] = useState("");
//     const [ConfirmPwd, setcpwd] = useState("");

//     return(
//         <div classname="flex justify-center p-32 h-screen overflow-hidden">
//             <div className="w-2/3 p-10  m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-xl">
//             <h1 className>
//                 SignUp
//             </h1>
//             <form classname=" ">
//                 <div classname="flex mb-20 space-y-4">
//                     <Inputfield
//                         valueState={[FirstName, setFirstName]}
//                         title="First Name"
//                         placeholder="Enter First Name"
//                     />
//                 </div>
//                 <div className='flex'>
//                     <Inputfield
//                         valueState={[LastName, setLastName]}
//                         title="Last Name"
//                         placeholder="Enter Last Name"
//                     />
//                 </div>
//                 <div>
//                     <Inputfield
//                         valueState={[PhoneNo, setphno]}
//                         title="Phone No."
//                         placeholder="Enter Phone No."
//                     />
//                 </div>
//                 <div>
//                     <Inputfield
//                         valueState={[Mailid, setMailid]}
//                         title="Email"
//                         placeholder="Enter Mail ID"
//                     />
//                 </div>
//                 <div>
//                     <Inputfield
//                         valueState={[Password, setpwd]}
//                         title="Password"
//                         placeholder="Enter Password"
//                         type='password'
//                     />
//                 </div>
//                 <div>
//                     <Inputfield
//                         valueState={[ConfirmPwd, setcpwd]}
//                         title="Confirm Password"
//                         placeholder="Enter Password"
//                         type='password'
//                     />
//                 </div>
//             </form>
//             </div>
//         </div>
//     );
// }
// export default UserSignUp;


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
            
            <div className='min-h-screen py-24 bg-slate-300'>
                <div className='container mx-auto bg-white'>
                    <div className='flex flex-col lg:flex-row w-full bg-white mx-auto shadow-lg overflow-hidden'>
                        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-cover bg-slate-400 ' 
                            style={{
                            backgroundImage:
                                "linear-gradient(to bottom left, rgba(220, 229, 230, 0.1), rgba(0, 50, 35, 0.9)), url(https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            }}>
                            <h1 className='text-6xl mb-3 text-slate-200 font-semibold'>
                                Welcome
                            </h1>
                            <div>
                                <p className='text-xl text-slate-300 font-semibold '>
                                    Not yet a customer? Please register blah blah blah blah blah blah blah
                                </p>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 py-16 px-12'>
                            <h2 className='text-3xl mb-8 font-semibold'>
                                Sign Up
                            </h2>
                            <p className='mb-6'>
                                Create your account. It's free and only takes a minute!
                            </p>
                            <form action='#'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <input type = "text" placeholder='Firstname' className='border-2 border-gray-300 py-1 px-2 rounded'></input>
                                    <input type = "text" placeholder='Surname' className='border-2 border-gray-300 py-1 px-2 rounded'></input>
                                </div>
                                <div className='mt-5'>
                                    <input type = "tel" placeholder='Phone.no' className='border-2 border-gray-300 py-1 px-2 w-full rounded'></input>
                                </div>
                                <div className='mt-5'>
                                    <input type = "text" placeholder='Email' className='border-2 border-gray-300 py-1 px-2 w-full rounded'></input>
                                </div>
                                <div className='mt-5'>
                                    <input type = "password" placeholder='Password' className='border-2 border-gray-300 py-1 px-2 w-full rounded'></input>
                                    
                                </div>
                                <div className='mt-5 '>
                                    <input type = "password" placeholder='Confirm Password' className='border-2 border-gray-300 py-1 px-2 w-full rounded'></input>
                                </div>
                                <div className='mt-5'>
                                    <input type ="checkbox" className='border border-gray-400'></input>
                                        <span>
                                            <a> </a>I accept the <a href = "#" className='text-grey-500 font-semibold'> Terms of Use</a> & <a href ="" className='text-grey-500 font-semibold'>Privacy Policy</a>
                                        </span>
                                    

                                </div>
                                <div class="mt-5">
                                    <button class = "w-full bg-slate-400 py-3 text-center text-white font-semibold rounded hover bg-slate-300 hover:bg-slate-500 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-500">
                                        Sign Up Now
                                    </button>

                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
    
            </div>

            

  )
}



export default Profile
