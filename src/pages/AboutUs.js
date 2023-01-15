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
                    <h2 className='header bold text-4xl'>
                        About Us
                    </h2>
                    <p className='section-subtitle text-2xl'>{message}</p>
                </div>
                
                <div className = 'grid grid-cols-3 text-center space-x-4 lg:grid-cols-5 m-4 '>

                    <div className='team-item shadow-md'>
                        
                        <img 
                        src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' className=""/>
                        <h3 className='bold text-xl'>Suvan Sathyendira</h3>
                        <div className='team-info'>
                            <p>
                                PSG College of Technology
                            </p>
                            <p>
                                Suvan is our sample sample sample
                            </p>

                            <ul className='team-icon'>

                                <li><button className='twitter'>
                                    <i className='fa fa-twitter'></i>
                                </button></li>
                                <li><button className='instagram'>
                                    <i className='fa fa-instagram'></i>
                                </button></li>
                                <li><button className='linkedln'>
                                    <i className='fa fa-linkedln'></i>
                                </button></li>
                                <li><button className='github'>
                                    <i className='fa fa-github'></i>
                                </button></li>

                            </ul>
                        </div>

                    </div>
                

                
                    <div className='team-item'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img' alt = "pic"/>
                        <h3 className='Ashwin bold text-xl'>Ashwin V</h3>
                        <div className='team-info'>
                            <p>
                                PSG College of Technology
                            </p>
                            <p>
                                Ashwin is our sample sample sample
                            </p>

                            <div className='mt-4 flex justify-center space-x-2'>
                              <Link to="www.google.com"> 
                              <AiOutlineGithub size={30} />
                              </Link>
                              <AiOutlineInstagram size={30} />
                              <AiOutlineLinkedin size={30} />
                            </div>
                        </div>

                    </div>
                


                
                    <div className='team-item'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img' alt = "pic"/>
                        <h3 className='Shivani bold text-xl'>Shivani Sri</h3>
                        <div className='team-info'>
                            <p>
                                PSG College of Technology
                            </p>
                            <p>
                                Shivani is our sample sample sample
                            </p>

                            <ul className='team-icon'>

                                <li><button  className='twitter'>
                                    <i className='fa fa-twitter'></i>
                                </button></li>
                                <li><button  className='instagram'>
                                    <i className='fa fa-instagram'></i>
                                </button></li>
                                <li><button  className='linkedln'>
                                    <i className='fa fa-linkedln'></i>
                                </button></li>
                                <li><button  className='github'>
                                    <i className='fa fa-github'></i>
                                </button></li>

                            </ul>
                        </div>

                    </div>
                

                
                    <div className='team-item'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img' alt = "pic"/>
                        <h3 className='Nashita bold text-xl'>Nashita V</h3>
                        <div className='team-info'>
                            <p>
                                PSG College of Technology
                            </p>
                            <p>
                                Nashita is our sample sample sample
                            </p>

                            <ul className='team-icon'>

                                <li><button  className='twitter'>
                                    <i className='fa fa-twitter'></i>
                                </button></li>
                                <li><button  className='instagram'>
                                    <i className='fa fa-instagram'></i>
                                </button></li>
                                <li><button  className='linkedln'>
                                    <i className='fa fa-linkedln'></i>
                                </button></li>
                                <li><button  className='github'>
                                    <i className='fa fa-github'></i>
                                </button></li>

                            </ul>
                        </div>

                    </div>
                

                
                    <div className='team-item'>
                        
                        <img src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'  className='team-img' alt = "pic"/>
                        <h3 className='Sivesh bold text-xl'>Sivesh Kannan</h3>
                        <div className='team-info'>
                            <p>
                                PSG College of Technology
                            </p>
                            <p>
                                Sivesh is our sample sample sample
                            </p>

                            <ul className='team-icon'>

                                <li><button  className='twitter'>
                                    <i className='fa fa-twitter'></i>
                                </button></li>
                                <li><button  className='instagram'>
                                    <i className='fa fa-instagram'></i>
                                </button></li>
                                <li><button  className='linkedln'>
                                    <i className='fa fa-linkedln'></i>
                                </button></li>
                                <li><button  className='github'>
                                    <i className='fa fa-github'></i>
                                </button></li>

                            </ul>
                        </div>

                    </div>
                </div>
        </div>
       </section>
    )

}

export default AboutUs;