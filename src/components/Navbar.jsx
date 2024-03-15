import React, { useState } from "react";
import {
  HiArrowLongRight,
  logo,
  navLinks,
  socialLinks,
} from "../constants/data";
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import ichchha from "../assets/ichchha.webp";

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
      <nav className="relative top-0">
      {/* <nav className="absolute top-0 w-full"> */}
        <div className="flex items-start justify-between p-4 z-40 bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)]">
          {/* <div className="flex items-center gap-2 cursor-pointer transition-all duration-300 text-gradient">
                        <FaWhatsapp className="w-8 h-8 text-gold" />
                        <a href="tel:+1234567890" className="text-peepal-300 text-base opacity-0 lg:opacity-100 lg:text-xl select-none">
                            +1234567890
                        </a>
                    </div> */}

          <div className="cursor-pointer transition-all duration-300 text-gradient mt-1">
            <a
              href="https://wa.me/+9779802738099"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base"
            >
              <FaWhatsapp className="text-2xl text-gold" /> 9802738099
            </a>
          </div>

          {/* <div className="logo-wrapper absolute top-2 left-1/2 -translate-x-1/2"> */}

          <a href="/" className="logo-wrapper">
            <img
              src={logo}
              alt="logo"
              className="w-32 h-24 object-contain p-2"
            />
          </a>

          <div
            className={`flex items-center gap-2 cursor-pointer transition-all duration-300 text-gradient`}
            onClick={toggleNav}
          >
            <span className="text-base opacity-0 lg:opacity-100 lg:text-xl select-none">
              Menu
            </span>
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
          </div>

          {/* <div className="mt-1">
                        <button className="bg-gradient text-navy px-4 py-2 font-bold rounded-lg">Book Now</button>
                       <button className="text-gradient font-medium text-lg">Book Now</button>
                    </div> */}
        </div>

        <div
          className="fixed inset-0 bg-gradient flex justify-center items-center transition-all duration-300 z-50"
          style={{
            // transform: isNavOpen ? "translateY(0)" : "translateY(-100%)",
            transform: isNavOpen ? "translateY(0)" : "translateY(0)",
            opacity: isNavOpen ? "1" : "0",
            pointerEvents: isNavOpen ? "auto" : "none",
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 z-50">
            <button
              onClick={closeNav}
              className="absolute top-0 right-0 p-4 text-navy"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex w-full items-center justify-between h-screen">
              <div
                className="relative flex justify-between w-2/3 pl-36 h-full text-ivory"
                style={{
                  backgroundImage: `url(${ichchha})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="overlay absolute inset-0 bg-black opacity-80 z-0"></div>
                <ul className="flex flex-1 flex-col items-start justify-center gap-8 z-10">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.link} className="text-3xl ">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-1 justify-center flex-col gap-20 z-10">
                  <ul className="flex  flex-col items-start gap-4">
                    <h4>More about Rooms</h4>
                    <li>
                      <a href="">40 Deluxe Rooms</a>
                    </li>
                    <li>
                      <a href="">30 Super Deluxe Rooms</a>
                    </li>
                    <li>
                      <a href="">20 Premium Rooms</a>
                    </li>
                    <li>
                      <a href="">10 Junior Suite</a>
                    </li>
                    <li>
                      <a href="#Suite">10 Executive Rooms</a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start gap-4">
                    <h4>More about Halls</h4>
                    <li>
                      <a href="">Janaki Hall</a>
                    </li>
                    <li>
                      <a href="">Jyamire Hall</a>
                    </li>
                    <li>
                      <a href="">Narayani Hall</a>
                    </li>
                    <li>
                      <a href="">Balmiki Hall</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-1/3 flex items-center justify-center flex-col gap-1 bg-gradient h-full ">
                <img
                  src={logo}
                  alt="Footer Logo"
                  className="w-40 h-auto object-contain mb-4"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(0%) sepia(82%) saturate(7492%) hue-rotate(123deg) brightness(77%) contrast(93%)",
                  }}
                />
                <p className="mb-4">Hotel Ichchha</p>
                <p> Simara, Bara, Nepal</p>
                <p>+977-9802738099</p>
                <p>info@hotelichchha.com</p>
                <div className="footer-about-social-list mt-6 text-2xl">
                  <a href="#" className="inline-block mr-4">
                    <FaFacebook />
                  </a>
                  <a href="#" className="inline-block mr-4">
                    <FaInstagram />
                  </a>
                  <a href="#" className="inline-block">
                    <FaTripadvisor />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
