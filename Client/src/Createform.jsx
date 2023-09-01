import React from 'react'
import { NavLink } from "react-router-dom";

const Createform = () => {
    return (
        <>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-60">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Create Form
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

                            <textarea name="comment" form="usrform" className='w-full'>Enter your description here...</textarea>
                        </div>

                        <div className="mt-4">
                            <label for="cars">Category:</label>
                            <select name="cars" id="cars" className='mx-3 my-3 px-3'>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>

                        <div className="mt-4 flex ">
                            <label
                                htmlFor="Gender"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Status
                            </label>
                            <div className="flex px-6">
                                <div className='px-4'>
                                    <label
                                        htmlFor="toggle"
                                        className="block text-sm font-medium text-gray-700 "
                                    >
                                        Active
                                    </label>
                                    <input
                                        type="radio"
                                        name="toggle"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                                <div className='px-4'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 "
                                    >
                                        Inactive
                                    </label>
                                    <input
                                        type="radio"
                                        name="toggle"
                                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Create
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Createform