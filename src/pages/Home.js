import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";

const Home = () => {
  return (
    <React.Fragment>
      <div className="w-full h-full overflow-x-hidden font-sans ">
        <Navbar />
        <Mainsection />
      </div>
    </React.Fragment>
  );
};

export default Home;
