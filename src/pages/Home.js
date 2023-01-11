import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col justify-center w-full font-sans h-fulloverflow-hidden lg:fixed">
        <Navbar className="mb-8"/>
        <Mainsection className="w-full h-full" />
      </div>
    </React.Fragment>
  );
}

export default Home;
