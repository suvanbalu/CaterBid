import React from "react";
import Navbar from "../../components/Navbar";
import Usercount from "../../components/usercount";
import BidPopup from "../../components/bidpopup";
import Postbid from "../../components/postbid";
import Index from "../../components/carousel";

const CatererHome = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className=" Headline h-1/3 w-full bg-red-700 flex items-center justify-between px-24">
        <div className="w-1/2">
          <p className="text-white tracking-wide text-[80px] font-bold mb-3">
            Discover & Bid
          </p>
          <p className="text-orange-300 text-2xl font-semibold ">
            From wide range of events posted by users!
          </p>
        </div>
        <div className="Count flex w-2/3 bg-white h-full items-center">
          <Usercount ncaterer="352" nuser="600" nbid="20156" nevent="1032" />
        </div>
      </div>

      <div className="flex cols grid-cols-5 mt-10 ml-10">
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num="1" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Suvan",amount:"10000"}]}/>
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num ="2" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Svan",amount:"10000"}]}/>
      </div>
      <Index />
    </div>
  );
};

export default CatererHome;
