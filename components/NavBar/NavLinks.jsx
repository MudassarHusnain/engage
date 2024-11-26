'use client'
import React from 'react'
import { RiNotification2Line } from "react-icons/ri";
import image from '@/public/images/man.jpeg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import HeroSection from './../HeroSection/HeroSection';
import Image from 'next/image';

function NavLinks() {
    const [activeLink, setActiveLink] = useState("home");
    return (
        <>
            <nav className='bg-slate-50 border-b-[1px] px-[72px] py-4 h-20'>
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center ">
                        <div className=' text-blue-700 font-bold items-center'>
                            ENGAGE

                        </div>
                        <div className='flex flex-row gap-9 text-[16px]'>
                            <div className='hover:border-b-[5px] active:border-black-950 h-15'>
                                <a className="relative text-black-950 hover:font-bold after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-black-950 after:opacity-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 hover:after:opacity-100 hover:after:bottom-[-5px]">Home</a>
                            </div>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center text-black-950 hover:font-bold after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-black-950 after:opacity-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 hover:after:opacity-100 hover:after:bottom-[-5px]">
                                        Explore
                                        <RiArrowDropDownLine aria-hidden="true" className="p-0 m-0 size-5 mt-0.5 text-gray-400" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Account settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                            >
                                                License
                                            </a>
                                        </MenuItem>
                                        <form action="#" method="POST">
                                            <MenuItem>
                                                <button
                                                    type="submit"
                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Sign out
                                                </button>
                                            </MenuItem>
                                        </form>
                                    </div>
                                </MenuItems>
                            </Menu>
                            <a className="relative text-black-950 hover:font-bold after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-black-950 after:opacity-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 hover:after:opacity-100 hover:after:bottom-[-5px]">

                                <div className='active:border-b-2 active:border-black-950'>Your Leads </div>
                            </a>
                            <a className="relative text-black-950 hover:font-bold after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-black-950 after:opacity-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 hover:after:opacity-100 hover:after:bottom-[-5px]">

                                <div className='active:border-b-2 active:border-black-950'>Your Listings </div>
                            </a>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <RiNotification2Line className='shadow w-6 h-6 p-1' />
                            <Image src={image} width={30} height={30} alt='Profile Images' />
                            <div className="">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2  text-gray-900 hover:bg-gray-50">
                                            Laim Jashuwa
                                            <RiArrowDropDownLine aria-hidden="true" className="-mr-1 size-6 rounded-lg text-gray-400" />
                                        </MenuButton>
                                    </div>

                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <div className="py-1">
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Account settings
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    Support
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    License
                                                </a>
                                            </MenuItem>
                                            <form action="#" method="POST">
                                                <MenuItem>
                                                    <button
                                                        type="submit"
                                                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                    >
                                                        Sign out
                                                    </button>
                                                </MenuItem>
                                            </form>
                                        </div>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <HeroSection />
        </>
    )
}

export default NavLinks