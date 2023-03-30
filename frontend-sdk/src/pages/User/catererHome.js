import React from "react";
import Navbar from "../../components/Navbar";
import Usercount from "../../components/usercount";
import BidPopup from "../../components/bidpopup";
import Postbid from "../../components/postbid";
import { useEffect,useState} from "react";
import axios from "axios";
const CatererHome = () => {

  const [posts,setPosts] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:3001/post/all")
    .then((res) => {
      setPosts(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const postset1 = posts.map((post,idx) => (
    <Postbid
      postheadline={post.post_headline}
      uname={post.username}
      description={post.post_description}
      num={idx}
      bids={post.bids}
      eventcount={posts.event_count}
      ></Postbid>));
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
      <div className="text-2xl font-semibold mt-4 ml-4">Events happenening near you</div>
      <div className="grid grid-cols-4 gap-x-3 mt-4 ml-10 gap-y-8">
        {postset1}
      </div>

      <div className="text-2xl font-semibold mt-4 ml-4">Events based to your signature dish</div>
      <div className="grid grid-cols-4 gap-x-3 mt-4 ml-10 gap-y-8">
        
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num="1" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Suvan",amount:"10000"}]}/>
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num ="2" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Svan",amount:"10000"}]}/>
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num ="2" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Svan",amount:"10000"}]}/>
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num ="2" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Svan",amount:"10000"}]}/>
        <Postbid postheadline="Italian Fest" uname="uname" date="date" description="Blah blah" num ="2" bids={[{c_name:"Suvan",amount:"10000"},{c_name:"Svan",amount:"10000"}]}/>


      </div>

      
    </div>
  );
};

export default CatererHome;
