/* eslint-disable no-unused-vars */
import React from 'react';
import Home from '../../pages/Home/Home';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import { FaAngleDown, FaThLarge, FaUsers, FaUsersCog } from 'react-icons/fa';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5">
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu py-5 w-56 md:w-72 min-h-full bg-[#9398BF] text-base-content">

                        <div className="flex gap-3 px-5 items-center text-xl"  >
                            <span className="font-semibold">Sidebar</span>
                        </div>

                        <Accordion className="my-5 flex flex-col gap-1">
                            <AccordionItem>
                                <AccordionHeader className="w-full text-lg font-semibold bg-white rounded-sm p-2 flex justify-between items-center">
                                    <h3 className="">Item-1</h3>
                                    <FaAngleDown />
                                </AccordionHeader>

                                <AccordionBody className="ml-5 px-2 font-semibold ">
                                    <div className="accordion-body py-2 flex flex-col gap-2">
                                        <Link to='/itema' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item A</span>
                                        </Link>
                                        <Link to='/itemb' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item B</span>
                                        </Link>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader className="w-full text-lg font-semibold bg-white rounded-sm p-2 flex justify-between items-center">
                                    <h3 className="">Item-2</h3>
                                    <FaAngleDown />
                                </AccordionHeader>

                                <AccordionBody className="ml-5 px-2 font-semibold ">
                                    <div className="accordion-body py-2 flex flex-col gap-2">
                                        <Link to='/itema' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item A</span>
                                        </Link>
                                        <Link to='/itemb' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item B</span>
                                        </Link>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader className="w-full text-lg font-semibold bg-white rounded-sm p-2 flex justify-between items-center">
                                    <h3 className="">Item-3</h3>
                                    <FaAngleDown />
                                </AccordionHeader>

                                <AccordionBody className="ml-5 px-2 font-semibold ">
                                    <div className="accordion-body py-2 flex flex-col gap-2">
                                        <Link to='/itema' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item A</span>
                                        </Link>
                                        <Link to='/itemb' className="flex gap-3 py-1 bg-gray-200 rounded-sm font-semibold text-lg items-center" >
                                            <span className="text-center w-full">Item B</span>
                                        </Link>
                                    </div>
                                </AccordionBody>
                            </AccordionItem>


                        </Accordion>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Main;