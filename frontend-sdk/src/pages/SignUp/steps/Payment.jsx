import {useContext} from "react";
import { StepperContext } from "../contexts/StepperContext";


export default function Payment(){
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
                placeholder="Bank name"
                className="border-2 border-gray-300 py-1 px-2 w-full rounded"
              ></input>
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Account holder name"
                className="border-2 border-gray-300 py-1 px-2 w-full rounded"
              ></input>
            </div>
            
            <div className="mt-5">
              <input
                type="text"
                placeholder="Bank account number"
                className="border-2 border-gray-300 py-1 px-2 w-full rounded"
              ></input>
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="GST number"
                className="border-2 border-gray-300 py-1 px-2 w-full rounded"
              ></input>
            </div>

                
    
</div>;
}