import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-r from-orange-400 to-orange-500 font-sans">
        <Navbar />
        <Mainsection />
      </div>
    </React.Fragment>
  );
};

export default Home;
