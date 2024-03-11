import React, { useState } from "react";
import { HiArrowLongRight, logo, navLinks, socialLinks } from "../constants/data";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className="relative">
                <div className="flex items-start justify-between p-4 z-40 bg-gradient-to-t from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]">
                    <div
                        className={`flex items-center gap-2 cursor-pointer transition-all duration-300 text-gradient`}
                        onClick={toggleNav}
                    >
                        <svg
                            className="w-8 h-8 text-gold"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isNavOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            ) : (
                                // <path
                                //     strokeLinecap="round"
                                //     strokeLinejoin="round"
                                //     strokeWidth="2"
                                //     d="M4 6h8M4 12h16m-7 6h7"
                                // ></path>

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 8h16M4 16h16"
                                />

                            )}
                        </svg>
                        <span className="text-peepal-300 text-base opacity-0 lg:opacity-100 lg:text-xl select-none">
                            Menu
                        </span>
                    </div>

                    <div className="logo-wrapper">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-auto h-24 object-contain"
                        />
                    </div>

                    <div className="mt-1">
                        <button className="bg-gradient text-navy px-4 py-2 font-bold rounded-md">Book Now</button>
                    </div>
                </div>

                <div className="fixed inset-0 bg-gradient flex justify-center items-center transition-all duration-300 z-50" style={{ transform: isNavOpen ? "translateY(0)" : "translateY(-100%)", opacity: isNavOpen ? "1" : "0", pointerEvents: isNavOpen ? "auto" : "none" }}>
                    <div className="p-4 absolute top-0 bottom-0 left-0 right-0 z-50">
                        <button onClick={closeNav} className="absolute top-0 left-0 p-4 text-navy">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col items-center gap-4">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.link} className="text-xl">{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
