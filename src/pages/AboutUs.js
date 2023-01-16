import React from 'react'
import { Link } from 'react-router-dom'
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub} 
  from 'react-icons/ai'
  

const AboutUs = () => {
    let message ='This is a sample text sample sample sample sample sample'
    return (
        
       <section className='bg-white h-full w-full p-4 flex justify-center'>
        <div className='container'>
                <div className='text-center'>
                    <h2 className='header bold text-4xl p-2'>
                        About Us
                    </h2>
                    <p className='section-subtitle text-2xl'>{message}</p>
                    <br>
                    </br>
                </div>
                
                <div className = 'grid grid-cols-3 text-center space-x-4 lg:grid-cols-5 m-4 h-full w-full p-4 flex justify-center'>

                    <div className='team-item  border-black border-2 rounded shadow-md bg-white-500 hover:bg-slate-300 '>
                        
                        <img 
                        src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className="rounded-full"/>
                        <br></br>
                        <h3 className='bold text-xl'>Suvan Sathyendira</h3>
                        <div className='team-info italic'>
                            <p>
                                PSG College of Technology
                            </p>
                        </div>
                            <p>
                                Suvan is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center space-x-0'>
                            <Link to= "//www.github.com/suvanbalu">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/suvan.balu/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/suvanbalu/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>
                    </div>
                

                
                    <div className='team-item border-black border-2 rounded shadow-md bg-white-500 hover:bg-slate-300'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img rounded-full' alt = "pic"/>
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

                            <div className='mt-4 flex justify-center space-x-0'>
                            <Link to= "//www.github.com/asxwin">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/ashwin.in/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/ashwin-v-108068219/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                


                
                    <div className='team-item border-black border-2 rounded shadow-md bg-white-500 hover:bg-slate-300'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img rounded-full' alt = "pic"/>
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

                            <div className='mt-4 flex justify-center space-x-0'>
                            <Link to= "//www.github.com/shxvani">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/shxvani/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/shivani-s-b640241b2/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                

                
                    <div className='team-item border-black border-2 rounded shodow-md bg-white-500 hover:bg-slate-300'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png '  className='team-img rounded-full' alt = "pic"/>
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

                            <div className='mt-4 flex justify-center space-x-0'>
                            <Link to= "//www.github.com/NashitaV">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/na_shhhhh/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/nashita-v-972563219/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                            </div>

                    </div>
                

                
                    <div className='team-item border-black border-2 rounded shadow-md bg-white-500 hover:bg-slate-300'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img rounded-full ' alt = "pic"/>
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
                            

                            <div className='mt-4 flex justify-center space-x-0'>
                        
                            <Link to= "//www.github.com/siveshk">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineGithub size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center  opacity-0 transition-opacity group-hover:opacity-100 bg-slate-600 rounded-2xl p-1 text-white">
                                    
                                    Github
                                    </span>
                                </div>
                            </div>
                            </Link>

                            <Link to= "//www.instagram.com/sivesh_k/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineInstagram size={30}  /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-red-600 rounded-xl p-1 text-white">
                                    Instagram
                                    </span>
                                </div>
                            </div>
                            </Link>


                            <Link to= "//www.linkedin.com/in/sivesh-kannan-455811252/">
                            <div class="p-2">
                                <div class="group relative w-max">
                                    <button><AiOutlineLinkedin size={30} /></button>
                                    <span
                                    class="pointer-events-none absolute h-full w-full flex justify-center opacity-0 transition-opacity group-hover:opacity-100 bg-sky-600 rounded-2xl p-1 text-white ">
                                    Linkedln
                                    </span>
                                </div>
                            </div>
                            </Link>
                                
                            </div>

                    </div>
                </div>
        </div>
       </section>
    )

}

export default AboutUs;