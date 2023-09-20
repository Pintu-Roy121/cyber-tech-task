/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaAlignRight, FaBars } from "react-icons/fa";

const Navbar = () => {

    const menuItems = <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
    </>

    return (
        <div className='bg-black py-3 text-white'>
            <div className='w-11/12 md:w-4/5 mx-auto flex justify-between items-center'>
                <label htmlFor="my-drawer-2" className="text-white flex gap-2 items-center drawer-button lg:hidden"  >
                    Menu
                    <FaBars />
                </label>

                <div className='hidden md:block mx-auto'>
                    <div className='w-full flex justify-center gap-10 text-lg font-semibold'>
                        {menuItems}
                    </div>
                </div>

                <div>
                    <div className="drawer drawer-end block md:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer-4" className="drawer-button flex gap-2 items-center">
                                Sidebar
                                <FaAlignRight />
                            </label>
                            {/* Page content here */}
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu px-7 py-10 flex flex-col gap-5 w-56 min-h-full font-semibold bg-base-200 text-base-content">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;