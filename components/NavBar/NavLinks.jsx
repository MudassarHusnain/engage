'use client'
import React, { useState } from 'react'
import image from '@/public/images/man.jpeg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { RiArrowDropDownLine } from "react-icons/ri";
import HeroSection from './../HeroSection/HeroSection';
import Image from 'next/image';
import Rect from './Rect';
import avatar from '@/public/images/avatar.svg'
import user from '@/public/images/user.svg'
function NavLinks() {
    const [activeLink, setActiveLink] = useState("home");

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <nav className='bg-navBg border-b-[1px]  py-5 h-[74px] w-full'>
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center h-full px-[72px] text-[14px]">
                        <div className='text-engageColor font-bold items-center hidden md:flex'>
                            ENGAGE
                        </div>
                        <div className='flex flex-row justify-between gap-9 text-[16px] text-linksColor  max-[640px]:hidden'>
                            <div className="flex text-[16px]" onClick={() => handleLinkClick("home")}>
                                <div className="relative group h-15">
                                    <a className={`relative text-navText hover:font-bold ${activeLink === "home" && ('font-bold')}`}>Home</a>
                                    {activeLink === "home" && (
                                        <div className="absolute top-10">
                                            <Rect />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="inline-flex w-full justify-center text-navText hover:font-bold after:content-[''] after:absolute after:w-[42px] after:h-[3px] after:bg-black-950 after:opacity-0 after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2 hover:after:opacity-100 hover:after:bottom-[-5px]">
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

                            <div className="flex text-[16px]" onClick={() => handleLinkClick("yourLeads")}>
                                <div className="relative group h-15">
                                <a className={`relative text-navText hover:font-bold ${activeLink === "yourLeads" && ('font-bold')}`}>Your Leads</a>
                                    {activeLink === "yourLeads" && (
                                        <div className="absolute top-10">
                                            <Rect />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex text-[16px]" onClick={() => handleLinkClick("yourListings")}>
                                <div className="relative group h-15">
                                    <a className={`relative text-navText hover:font-bold ${activeLink === "yourListings" && ('font-bold')}`}>Your Listings</a>
                                    {activeLink === "yourListings" && (
                                        <div className="absolute top-10">
                                            <Rect />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center max-[640px]:justify-between max-[640px]:flex-row max-[640px]:w-full'>
                            <Image src={user} width={30} height={30} className='shadow w-30 h-30' alt='Notification' />
                            <Image src={avatar} width={30} height={30} alt='Profile Images' />
                            <div className="">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full text-[14px] justify-center items-center gap-x-1.5 rounded-md  px-3 py-2  text-gray-900 hover:bg-gray-50">
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
                                                        className="block w-full px-4 py-2 text-left text-sm text-logOutColor data-[focus]:bg-gray-100 data-[focus]:text-logOutColor data-[focus]:outline-none"
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
