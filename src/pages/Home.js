import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
      <div className="w-screen h-screen overflow-x-hidden font-sans ">
        <Navbar />
        <div className="w-full h-full">
        <Mainsection />
        </div>
      </div>
  );
};

export default Home;
