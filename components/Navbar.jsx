import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='print:hidden'>
            <nav className="hidden lg:block max-w-full fixed w-full top-0 shadow bg-[#F8FAFB] mb-14 z-50">
                <div className="lg:max-w-7xl mx-auto w-full flex justify-between py-2 px-4">
                    <a className="flex gap-2 text-gray-700 items-center font-serif cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-blue-700" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-2xl font-semibold cursor-pointer">CV Creator</span>
                    </a>
                    <div className="flex gap-3 items-center">
                        {/* <Link href='/' className="text-gray-500 transition-all ease-in hover:text-blue-700 px-1 py-5 cursor-pointer">Home</Link> */}
                        {/* <Link href='/cv-builder' className="text-gray-500 transition-all ease-in hover:text-blue-700 px-1 py-5 cursor-pointer">Create CV Template</Link> */}
                    </div>
                    <div className="flex gap-3 items-center">
                        {/* <a className="text-gray-500 transition-all ease-in hover:text-blue-700 px-1 py-5 cursor-pointer">Create Account</a> */}
                        {/* <link className="bg-blue-700 text-gray-200 transition-all ease-in hover:bg-blue-800 px-4 py-2 cursor-pointer rounded-md duration-300">Login</link> */}
                    </div>
                </div>
            </nav>

            <nav className="flex justify-between lg:hidden shadow fixed top-0 w-full items-center p-4 bg-[#F8FAFB]">
                <div>
                    <div className="flex text-gray-700 items-center font-serif">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-blue-800" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {/* <link href="/" className="text-xl font-semibold">FMark Bank</link> */}
                    </div>
                </div>
                {/* <img src="../../assets/menu.png" alt="" className="w-6 h-6" />
                <img src="../../assets/close.png" alt="" className="w-6 h-6" /> */}



                <div className="absolute top-0 h-screen left-0 flex w-full bg-black/50">
                    <div className="w-9/12 bg-white p-5 h-full flex flex-col gap-4">
                        <div>
                            <a className="flex gap-2 text-gray-700 items-center font-serif">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-blue-800" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-xl font-semibold">FMark Bank</span>
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a
                                className="px-1 py-5 flex gap-2 items-center text-gray-500 hover:text-blue-700 transition-all ease-in">
                                <i className="fa-solid fa-house"></i>
                                <span>Home</span>
                            </a>
                            <a
                                className="px-1 py-5 flex gap-2 items-center text-gray-500 hover:text-blue-700 transition-all ease-in">
                                <i className="fa-solid fa-table-list"></i>
                                <span>Features</span>
                            </a>
                            <a
                                className="px-1 py-5 flex gap-2 items-center text-gray-500 hover:text-blue-700 transition-all ease-in">
                                <i className="fa-solid fa-person-military-pointing"></i>
                                <span>Customers</span>
                            </a>
                            <a
                                className="px-1 py-5 flex gap-2 items-center text-gray-500 hover:text-blue-700 transition-all ease-in">
                                <i className="fa-sharp fa-solid fa-tags"></i>
                                <span>Create Account</span>
                            </a>
                            <a
                                className="w-36 bg-blue-700 text-base text-gray-200 transition-all text-center ease-in hover:bg-blue-800 py-2 rounded-md">
                                <span>Login</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar