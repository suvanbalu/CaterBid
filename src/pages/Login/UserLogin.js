import React, { useState } from 'react';
import Inputfield from "../../components/TextInput"

const UserLogin = () => {
    const [Mailid, setMailid] = useState("");
    const [pwd, setpwd] = useState("");
    return (
   
        <div className="flex flex-col justify-center h-max overflow-hidden bg-white">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                  User Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                    <Inputfield
                        valueState={[Mailid, setMailid]}
                        title="Email"
                        placeholder="Enter Mail ID"
                    />

                    </div>
                    <div className="mb-2">
                    <Inputfield
                        valueState={[pwd, setpwd]}
                        title="Password"
                        placeholder="Enter Password"
                        type='password'
                    />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <button
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </div>
    );
}
export default UserLogin;