import React, { createContext, useState } from "react";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";



export const LoginWrapTab = createContext();

const LoginWrap = () => {
  const initialTabMenuItems = [
    {
      text: "User Login",
      tab: <UserLogin />,
      
    },
    {
      text: "Admin Login",
      tab: <AdminLogin />,
    },
  ];

  

  const [selected, setSelected] = useState(0);
  const [tabMenuItems, setTabMenuItems] = useState(initialTabMenuItems);

  const updateByID = (id) => {
    
      
        let tempTabMenuItems = [...tabMenuItems];
        tabMenuItems[0].text = "Update Club";
        setTabMenuItems(tempTabMenuItems);
    setSelected(0);
  };

  return (
   
      <section className="">
        <div className="items-center w-full h-full px-8 pt-8">
          <p className="mb-8 text-lg tracking-wider uppercase">Login</p>
          <header className=""> 
            {tabMenuItems.map((item, idx) => {
              return (
                <button
                  onClick={() => setSelected(idx)}
                  key={idx}
                  style={
                    selected === idx
                      ? {
                        WebkitBoxShadow: "2px -2px 25px 0px rgba(0,0,0,0.1)",
                        clipPath:
                          "polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)",
                      }
                      : {}
                  }
                  className={`${selected === idx &&
                    "bg-white rounded-t-lg box-border  font-semibold"
                    } px-6 py-4`}
                >
                  <p className="">{item.text}</p>
                </button>
              );
            })}
          </header>
        </div>
        {tabMenuItems[selected].tab}
      </section>
  );
};

export default LoginWrap;