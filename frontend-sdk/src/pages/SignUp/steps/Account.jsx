import {useContext} from "react";
import { StepperContext } from "../contexts/StepperContext";


export default function Account(){
        const{userData,setUserData} =useContext(StepperContext);
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setUserData({...userData,[name]: value});

    };
    return <div className="flex flex-col">

            <p className="mb-6">
                Create your account. It's a three step process and will only take a minute!
            </p>
            <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="FSSAI License"
                    className="border-2 border-gray-300 py-1 px-2 w-full rounded"
                  ></input>
                    </div>
                    <div className="mt-5 pr-4">
                      <label className="border-2 border-gray-300 py-1 px-2 w-full rounded">
                        <select className="w-full" required>
                          <option className =" text-slate-300" value="" disabled selected hidden>Type of business</option>
                          <option className="border-none outline-none" value="Private Limited Company">Private Limited Company</option>
                          <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                          <option value="One-Person Company">One-Person Company</option>
                        </select>
                      </label>
                    </div>
        
    </div>;
}