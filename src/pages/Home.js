import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-screen h-screen overflow-x-hidden font-sans ">
        <Navbar />
        <Mainsection className="w-full" />
      </div>
    </React.Fragment>
  );
};

export default Home;
