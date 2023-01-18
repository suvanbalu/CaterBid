import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import {
    TbArrowBack
} from "react-icons/tb"
import Navbar from "../components/Navbar";

const AboutUs = () => {
    let message ='This is a sample text sample sample sample sample sample'
    return (
      <React.Fragment>
      <nav
      style={{
          position: "sticky",
          top: 0
      }} 
      className='bg-white px-4 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between '>
          <div className='flex items-center w-1/3 space-x-4'>
              <img
                  src = "https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                  className='px-1 h-10 lg:h-14'
                  alt="logo"
              >
              </img>
              <h1 className = "m-4 text-2xl font-bold text-red-500"> CaterBid </h1>
          </div>
          <div>
          <Link to="/">
            <TbArrowBack size={30}></TbArrowBack>
            </Link>
          </div>
    </nav>
       <section className='bg-gradient-to-b from-slate-800 to-slate-600 h-screen w-full p-4 flex justify-center'>
        <div className='container'>
                <div className=' about_us_text text-white text-center'>
                    <h2 className='header bold text-4xl p-2'>
                        About Us
                    </h2>
                    <p className='section-subtitle text-2xl'>{message}</p>
                    <br>
                    </br>
                </div>
                
                <div className = 'main-grid grid grid-cols-3 text-center lg:grid-cols-5 m-4 h-fit w-full justify-center text-white'>

                    <div className='shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150'>
                        
                        <img src = 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/7/18/0/HGTV_Color-Wheel-Full_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1400967008479.jpeg' className="rounded-full p-5 "/>
                        <br></br>
                        <h3 className='bold text-xl '>Suvan Sathyendira</h3>
                        <div className='team-info italic '>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Suvan is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center space-x-0'>
                            <Link to= "//www.github.com/suvanbalu">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/suvan.balu/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/suvanbalu/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>
                    </div>

                
                    <div className='ashwin team-item   shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150'>
                        
                    <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-full p-5"/>
                        <br></br>
                        <h3 className='Ashwin bold text-xl'>Ashwin V</h3>
                        <div className='team-info italic'>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Ashwin is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center py-2 px-20'>
                            <Link to= "//www.github.com/asxwin">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none  h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/ashwin.in/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/ashwin-v-108068219/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none  h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedin
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                


                
                    <div className='shivani team-item   shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150 '>
                        
                    <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-full p-5"/>
                        <br></br>
                        <h3 className='Shivani bold text-xl'>Shivani Sri</h3>
                        <div className='team-info italic'>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Shivani is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center py-2 px-20'>
                            <Link to= "//www.github.com/shxvani">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/shxvani/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/shivani-s-b640241b2/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedin
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                

                
                    <div className='nash team-item   shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150 '>
                        
                    <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-full p-5"/>
                        <br></br>
                        <h3 className='Nashita bold text-xl'>Nashita V</h3>
                        <div className='team-info italic'>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Nashita is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center py-2 px-20'>
                            <Link to= "//www.github.com/NashitaV">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/na_shhhhh/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/nashita-v-972563219/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedin
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                

                
                    <div className='sivesh team-item   shadow-lg bg-white-500 hover:border-2 hover:border-orange-500 m-2 rounded-2xl border-2 border-white border-dotted hover:scale-105 grayscale hover:grayscale-0 duration-150 '>
                        
                    <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-full p-5"/>
                        <br></br>
                        <h3 className='Sivesh bold text-xl'>Sivesh Kannan</h3>
                        <div className='team-info italic'>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Sivesh is our sample sample sample
                            </p>
                            

                            <div className='mt-4 flex justify-center py-2 px-20 pb-5'>
                        
                            <Link to= "//www.github.com/siveshk">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/sivesh_k/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/sivesh-kannan-455811252/">
                            <div>
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none h-full w-fit flex text-center justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white  ">
                                    Linkedin
                                    </span>
                                </div>
                            </div>
                            </Link>
                                
                            </div>

                    </div>
                </div>
        </div>
    </section>
    </React.Fragment>
  );
};

export default AboutUs;
