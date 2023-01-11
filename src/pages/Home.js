import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-fulloverflow-hidden font-sans flex flex-col justify-center lg:fixed">
        <Navbar className="mb-8"/>
        <Mainsection className="w-full h-full" />
      </div>
    </React.Fragment>
  );
};

export default Home;
