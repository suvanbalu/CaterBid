import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
      <div className="w-screen h-screen overflow-x-hidden font-sans fixed ">
        <Navbar />
        <div className="md:w-full md:h-full fixed">
        <Mainsection />
        </div>
      </div>
  );
};

export default Home;
