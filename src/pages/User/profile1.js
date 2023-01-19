import React from 'react';
import Progress_bar from '../../components/progressbar';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { CiMail } from 'react-icons/ci'
import { SiGooglemaps } from 'react-icons/si'
import Navbar from '../../components/Navbar';
import { TbArrowBack } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const Profile1 = () => {
    return (
        <div class="m-0 ">
            <nav
                style={{
                    position: "sticky",
                    top: 0
                }}
                className='bg-white px-4 lg:px-[calc(100vw/20)] py-1 font-sans flex items-center justify-between '>
                <div className='flex items-center w-1/3 space-x-4'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
                        className='px-1 h-10 lg:h-14'
                        alt="logo"
                    >
                    </img>
                    <h1 className="m-4 text-2xl font-bold text-red-500"> CaterBid </h1>
                </div>
                <div>
                    <Link to="/">
                        <TbArrowBack size={30}></TbArrowBack>
                    </Link>
                </div>
            </nav>

            <div class=" m-0">


                <div class="p-2 bg-white shadow h-screen">

                    <div class="grid lg:grid-cols-2 px-24 items-center space-x-12">


                        <div class="bg-white shadow mt-12 ">
                            <div class="flex justify-center">
                                <div class="flex justify-center content-center p-5">
                                    <div class="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" >
                                        <svg class="relative text-gray-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </div>


                            </div>
                            <div class="mt-5 text-center border-b pb-10">

                                <h1 class="text-4xl font-medium text-gray-700">Ashwin V, <span class="font-light text-gray-500">27</span></h1>
                                <p class="font-light text-gray-600 mt-3">Tamil Nadu, India</p>

                                <p class="mt-8 text-gray-500">Caterer</p>
                                <p class="mt-2 text-gray-500">Hotel Arya Bhavan</p>

                            </div>
                        </div>

                        <div class="grid xl:grid-cols-2 px-48 space-y-7">

                            <button class="grid md:grid-rows-2 justify-center rounded-full bg-slate-200 h-24 w-24 mt-7 hover:bg-blue-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">
                                <div class="font-bold text-gray-700 text-3xl m-auto pt-3"><CiMail /></div>
                                <div class="text-gray-400">Mail</div>

                            </button>


                            <button class="grid md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-orange-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">

                                <div class="font-bold text-gray-700 text-3xl m-auto pt-3"><SiGooglemaps /></div>
                                <div class="text-gray-400">Maps</div>
                            </button>


                            <button class="grid md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24 hover:bg-yellow-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1">

                                <div class="font-bold text-gray-700 text-3xl m-auto pt-3" ><AiOutlineInstagram /></div>
                                <div class="text-gray-400">Instagram</div>
                            </button>


                            <button class="grid md:grid-rows-2 justify-center rounded-full bg-slate-200  h-24 w-24  hover:bg-purple-300 duration-300 transition ease-in-out delay-150 hover:-translate-y-1" >
                                <div class="font-bold text-gray-700 text-3xl m-auto pt-3"><AiOutlineFacebook /></div>
                                <div class="text-gray-400">Facebook</div>
                            </button>


                        </div>


                    </div>





                    <div class="mt-12 flex flex-col justify-center px-36">
                        <p class="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>

                    </div>
                    <div class="grid lg:grid-cols-2 space-x-4 ">
                        <div class=" bg-white shadow mt-10 grid grid-rows-3">
                            <div class="py-5 px-24 ">
                                <p></p>
                                <Progress_bar progress="60" height="20px" text='No of events posted' />
                            </div>
                            <div class="py-5 px-24 ">
                                <Progress_bar progress="40" height="20px" text='Nof of events pending' />
                            </div>
                            <div class="py-5 px-24 ">
                                <Progress_bar progress="20" height="20px" text='No of events successful' />
                            </div>


                        </div>

                        <div class="p-8 bg-white shadow mt-24">


                            <div>
                                <label for="my-modal" >
                                    <div class="p-8 bg-white shadow rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-blue-300 hover duration-300 ">
                                        Post 1, Hello this is your first post about blah blah, <b>Click to expand</b>
                                    </div>
                                </label>

                                <input type="checkbox" id="my-modal" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box bg-white text-black-300">
                                        <h3 class="font-bold text-lg">Post1</h3>
                                        <p class="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <div class="modal-action">
                                            <label for="my-modal" class="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4" >
                                <label for="my-modal1" >
                                    <div class="p-8 bg-white shadow rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:scale-105 hover:bg-blue-300 hover duration-300 ">
                                        Post 2, Hello this is your first post about blah blah, <b>Click to expand</b>
                                    </div>
                                </label>

                                <input type="checkbox" id="my-modal1" class="modal-toggle" />
                                <div class="modal">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                        <p class="py-4">This is ypur second post</p>
                                        <div class="modal-action">
                                            <label for="my-modal1" class="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default Profile1

