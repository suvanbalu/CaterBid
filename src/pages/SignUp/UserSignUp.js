import React, { useState } from 'react';
import Inputfield from "../../components/TextInput"

const UserSignUp = () => {
    const [FirstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [PhoneNo, setphno] = useState("");
    const [Mailid, setMailid] = useState("");
    const [Password, setpwd] = useState("");
    const [ConfirmPwd, setcpwd] = useState("");

    return(
        <div classname="flex justify-center p-32 h-screen overflow-hidden">
            <div className="w-2/3 p-10  m-auto mt-20 bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className>
                SignUp
            </h1>
            <form classname=" ">
                <div classname="flex mb-20 space-y-4">
                    <Inputfield
                        valueState={[FirstName, setFirstName]}
                        title="First Name"
                        placeholder="Enter First Name"
                    />
                </div>
                <div>
                    <Inputfield
                        valueState={[LastName, setLastName]}
                        title="Last Name"
                        placeholder="Enter Last Name"
                    />
                </div>
                <div>
                    <Inputfield
                        valueState={[PhoneNo, setphno]}
                        title="Phone No."
                        placeholder="Enter Phone No."
                    />
                </div>
                <div>
                    <Inputfield
                        valueState={[Mailid, setMailid]}
                        title="Email"
                        placeholder="Enter Mail ID"
                    />
                </div>
                <div>
                    <Inputfield
                        valueState={[Password, setpwd]}
                        title="Password"
                        placeholder="Enter Password"
                        type='password'
                    />
                </div>
                <div>
                    <Inputfield
                        valueState={[ConfirmPwd, setcpwd]}
                        title="Confirm Password"
                        placeholder="Enter Password"
                        type='password'
                    />
                </div>
            </form>
            </div>
        </div>
    );
}
export default UserSignUp;