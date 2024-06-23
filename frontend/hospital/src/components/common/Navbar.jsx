import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { FaShoppingCart } from "react-icons/fa"
import { FaRegUserCircle } from "react-icons/fa";



function Navbar() {
    const [login, setLogin] = useState(true);
    return (

        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-2 bg-opacity-35 z-50 bg-blue-950">
            <div className="w-20">
                <NavLink to={'/'}>
                    <img
                        src="https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png"
                        alt="Logo"
                        className="h-auto w-auto max-w-20 max-h-full"
                    />
                </NavLink>
            </div>

            <div>
                <ul className="flex flex-wrap text-white text-xs gap-0 sm:text-xl">
                    <li className="hover:text-green-400">
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className="ml-2 sm:ml-10 hover:text-green-400">
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li className="ml-2 sm:ml-10 hover:text-green-400">
                        <NavLink to={'/admin'}>Admin</NavLink>
                    </li>


                </ul>
            </div>
            <div className='flex  '>
                {login ? (
                    <div
                        className="ml-2 sm:ml-10 text-blue-50 hover:text-green-400"
                        onClick={() => setLogin(false)}
                    >
                        <NavLink to={'/login'}>LogIn</NavLink>
                    </div>
                ) : (
                    <div
                        className="ml-10 text-blue-50 hover:text-green-400"
                        onClick={() => setLogin(true)}
                    >
                        <NavLink to={'/signup'}>LogedIn</NavLink>
                    </div>
                )}
                <div className="ml-20 hover:text-green-400 text-red-500">
                    <NavLink to={'/cart'}>
                        <div className="relative">
                            <FaRegUserCircle className="text-2xl" />

                            {/* <span className="absolute top-[-7px] left-[-11px] bg-green-500 rounded-full w-4 h-4 flex justify-center items-center text-white text-xs">
                            </span> */}
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;