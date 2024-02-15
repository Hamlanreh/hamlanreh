'use client'
import { useState } from "react";
import Image from "next/image";
import NavListItem from "./NavListItem";


export default function Navbar() {
    const [open, setOpen] = useState(false);
  
    return (
        <header className="bg-white fixed left-0 top-0 right-0 z-20 flex items-center">
            <div className="container mx-auto">
                <div className="relative flex items-center justify-between">
                    <div className="w-52 max-w-full px-4">
                        <a href="/#" className="block w-full py-5">
                            <Image
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                                alt="logo"
                                className="w-full dark:hidden"
                                width={70}
                                height={70}
                            />
                            <Image
                                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                                alt="logo"
                                className="w-full hidden dark:block"
                                width={70}
                                height={70}
                            />
                        </a>
                    </div>

                    <div className="flex items-center justify-between px-4">
                        <div>
                            <button 
                                onClick={() => setOpen(!open)} id="navbarToggler"
                                className={` ${
                                open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                                    !open && "hidden"
                                } `}
                            >
                                <ul className="block lg:flex">
                                    <NavListItem link="/#home">Home</NavListItem>
                                    <NavListItem link="#about">About</NavListItem>
                                    <NavListItem link="#portfolio">Portfolio</NavListItem>
                                    <NavListItem link="#services">Services</NavListItem>
                                    <NavListItem link="#contact">Contact</NavListItem>
                                </ul>
                            </nav>
                        </div>
                    </div>	
                </div>
            </div>
        </header>
    );
  };
  

