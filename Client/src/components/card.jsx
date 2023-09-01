import React from 'react'

const card = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row min-w-xl justify-center items-center m-2">
                    <div
                        className="bg-white m-4 shadow-xl flex w-74 flex-col justify-center text-black  hover:bg-stone-100 transition ease-in-out duration-75 hover:-translate-y-1">

                        <div className="m-6 h-26 w-64">
                            <div className="flex">
                                <div className="">Username:- Rohan Sharma</div>
                            </div>
                            <div className="flex">
                                <div className="">Email:- rohansharma@gmail.com</div>
                            </div>
                            <div className="flex">
                                <div className="">Phone:- 9263847536</div>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <div
                                className="bg-orange-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                Edit User</div>
                            <div
                                className="bg-red-600 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                Delet User</div>
                        </div>
                    </div>
                    <div
                        className="bg-white m-4 shadow-xl flex w-74 flex-col justify-center text-black  hover:bg-stone-100 transition ease-in-out duration-75 hover:-translate-y-1">

                        <div className="m-6 h-26 w-64">
                            <div className="flex">
                                <div className="">Username:- Rohan Sharma</div>
                            </div>
                            <div className="flex">
                                <div className="">Email:- rohansharma@gmail.com</div>
                            </div>
                            <div className="flex">
                                <div className="">Phone:- 9263847536</div>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <div
                                className="bg-orange-900 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                Edit User</div>
                            <div
                                className="bg-red-600 text-white cursor-pointer m-4 px-8 py-1 rounded-2xl hover:bg-white hover:text-stone-900 font-medium">
                                Delet User</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default card