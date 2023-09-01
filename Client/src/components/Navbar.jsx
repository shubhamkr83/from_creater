import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center ">
                <nav className="self-center top-0 w-full max-w-7xl shadow bg-blue-500">
                    <div className="flex justify-between items-center text-white">
                        <h1 className="uppercase pl-10 py-4 text-xl font-sans font-bold">Logo</h1>
                        <ul className="hidden md:flex items-center text-[18px] font-semibold pr-10">
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><NavLink
                                to="/"
                                className="navbar-link "
                            >
                                Home
                            </NavLink></li>
                            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><NavLink
                                to="/createform"
                                className="navbar-link "
                            >
                                Create Form
                            </NavLink></li>
                        </ul>

                        <button
                            className="hidden md:flex uppercase md:mr-9 text-base border border-white px-3 py-2 my-0 font-semibold hover:bg-blue-600 rounded-2xl"> <NavLink
                                to="/signup"
                            >
                                Register
                            </NavLink>
                        </button>

                        <button className="block p-3 mx-10 md:hidden hover:bg-blue-600 rounded-xl group">
                            <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
                            <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
                            <div className="w-5 my-[3px] h-[3px] bg-white"></div>
                            <div
                                className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-blue-500 group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                                    <li className="hover:bg-blue-600 py-4 px-6 w-full"><NavLink
                                        to="/"
                                        className="navbar-link "
                                    >
                                        Home
                                    </NavLink></li>
                                    <li className="hover:bg-blue-600 py-4 px-6 w-full"><NavLink
                                        to="/"
                                        className="navbar-link "
                                    >
                                        About
                                    </NavLink></li>
                                    <li className="hover:bg-blue-600 py-4 px-6 w-full"><NavLink
                                        to="/"
                                        className="navbar-link "
                                    >
                                        Service
                                    </NavLink></li>
                                    <li className="hover:bg-blue-600 py-4 px-6 w-full"><NavLink
                                        to="/"
                                        className="navbar-link "
                                    >
                                        Contact
                                    </NavLink></li>
                                    <li className="hover:bg-blue-600 py-2 px-9 mt-3 border-2 border-white ">
                                        <NavLink
                                            to="/signup"
                                        >
                                            Register
                                        </NavLink></li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar