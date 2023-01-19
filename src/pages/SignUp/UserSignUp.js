import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Inputfield from "../../components/TextInput"

const UserSignUp = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [PhoneNo, setphno] = useState("");
    const [Mailid, setMailid] = useState("");
    const [Password, setpwd] = useState("");
    const [ConfirmPwd, setcpwd] = useState("");

    return (
        <React.Fragment>
            <nav>
                <div className="w-full h-full overflow-x-hidden font-sans ">
                <Navbar />
                </div>
            </nav>

            <section
                className="h-screen w-full p-4 flex flex-col items-center justify-center"
                style={{
                backgroundImage:
                    "linear-gradient(to bottom left, rgba(220, 229, 230, 0.1), rgba(0, 50, 35, 0.9)), url(https://plus.unsplash.com/premium_photo-1667666629862-586d2a4b7923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                }}
            >
        
                <div className="w-full p-6 m-auto bg-white opacity-80 rounded-md shadow-md sm:max-w-xl flex flex-col space-y-6">

                    <h1 className="text-3xl font-semibold text-center text-red-500 underline">
                        User SignUp
                    </h1>
                    <div classname="mt-24 flex flex-col space-y-6">

                        <Inputfield
                            valueState={[FirstName, setFirstName]}
                            title="First Name"
                            placeholder="Enter First Name"
                            className='mt-8'
                        />
                        <Inputfield
                            valueState={[LastName, setLastName]}
                            title="Last Name"
                            placeholder="Enter Last Name"
                            className='mt-4'
                        />
                        <Inputfield
                            valueState={[PhoneNo, setphno]}
                            className='mt-4'
                            title="Phone No."
                            placeholder="Enter Phone No."
                        />
                        <Inputfield
                            valueState={[Mailid, setMailid]}
                            className='mt-4'
                            title="Email"
                            placeholder="Enter Mail ID"
                        />
                        <Inputfield
                            valueState={[Password, setpwd]}
                            className='mt-4'
                            title="Password"
                            placeholder="Enter Password"
                            type='password'
                        />
                        <Inputfield
                            valueState={[ConfirmPwd, setcpwd]}
                            className='mt-4'
                            title="Confirm Password"
                            placeholder="Enter Password"
                            type='password'
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                    </div>
                </div>
                
            </section>
        </React.Fragment>
    );
}
export default UserSignUp;