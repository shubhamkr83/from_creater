import React from 'react'
import { NavLink } from "react-router-dom";

const Signup = () => {

    return (
        <>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-60">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Sign Up
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-opacity-50 px-3"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex ">
                            <label
                                htmlFor="Gender"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Gender
                            </label>
                            <div className="flex px-6">
                                <div className='px-4'>
                                    <label
                                        htmlFor="Gender"
                                        className="block text-sm font-medium text-gray-700 "
                                    >
                                        Male
                                    </label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                                <div className='px-4'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 "
                                    >
                                        Female
                                    </label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                                <div className='px-4'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 "
                                    >
                                        Other
                                    </label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <NavLink
                                to="/login"
                                className="navbar-link text-sky-400"
                            >
                                Login
                            </NavLink>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup