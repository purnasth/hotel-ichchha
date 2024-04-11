import React, { useState, useEffect } from "react";

import {
  HiArrowLongRight,
  logo,
  navLinks,
  navLinksRooms,
  navLinksEvents,
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const duration = "1000";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-all duration-${duration} z-50 ${
          window.scrollY > 0 ? "bg-bg-gold-light" : ""
        } ${visible ? "" : "-translate-y-full"}`}
      >
        <div
          className={`z-40 flex items-start justify-between
           ${
             visible
               ? "bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] "
               : "bg-transparent"
           }${
            window.scrollY > 0
              ? "flex items-center justify-between py-6 px-8"
              : "p-6 px-8"
          } 
          `}
        >
          <div
            className={`cursor-pointer transition-all duration-${duration} text-gold mt-1 ${
              visible ? "scale-100 translate-x-0" : "scale-0 translate-x-full"
            } ${window.scrollY > 0 ? "filter-black" : ""}`}
          >
            <a
              href="https://wa.me/+9779802738099"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base"
            >
              <FaWhatsapp className="text-2xl text-gold" /> 9802738099
            </a>
          </div>

          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2 logo-wrapper"
          >
            <img
              src={logo}
              alt="logo"
              className={`object-contain transition-all duration-${duration}  ${
                visible
                  ? "w-auto h-28 mt-0 p-2 -translate-y-1"
                  : "scale-0 -translate-y-6 bg-transparent"
              } ${
                window.scrollY > 0
                  ? "w-auto h-12 scale-75 p-4 -translate-y-0"
                  : // ? "filter-black w-16 h-12 object-contain scale-150 -mt-[4px] p-2"
                    ""
              }`}
            />
          </a>

          <div
            className={`flex items-center gap-2 cursor-pointer transition-all duration-${duration} text-gold ${
              visible ? "scale-100 translate-x-0" : "scale-0 -translate-x-full"
            } ${window.scrollY > 0 ? "filter-black" : ""}`}
            onClick={toggleNav}
          >
            <span className="text-base lg:text-xl select-none">Menu</span>
            <svg
              className="w-8 h-8 text-gold"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
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
                <path
                  className="translate-y-[2px] scale-[0.85]"
                  d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
                ></path>
              )}
            </svg>
          </div>
        </div>

        {/* <div className="h-px w-full bg-gradient-to-r from-navy/30 via-transparent to-navy/30" /> */}
        <div className="h-px w-[45%] bg-gradient-to-r from-navy/30 to-transparent absolute left-0" />
        <div className="h-px w-[45%] bg-gradient-to-l from-navy/30 to-transparent absolute right-0" />
      </nav>

      <div
        className="fixed inset-0 bg-gradient flex justify-center items-center transition-all duration-${duration} z-50 max-h-screen"
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
            className="absolute top-0 right-0 py-6 px-8 text-navy"
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
              <ul className="flex flex-1 flex-col items-start justify-center gap-8 z-10 text-ivory/90 font-medium">
                {navLinks.map((link) => (
                  <li
                    className="peer peer-hover:opacity-50 hover:translate-x-4 hover:tracking-widest hover:text-goldLight transition-all duration-300 ease-linear"
                    key={link.id}
                  >
                    <a href={link.link} className="text-4xl font-title">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-1 justify-center flex-col gap-20 z-10">
                <ul className="flex flex-col items-start gap-4">
                  {navLinksRooms.map((category) => (
                    <li key={category.id} className="group list-none">
                      <a
                        href={category.link}
                        className="text-4xl font-title hover:translate-x-2 hover:tracking-wider hover:text-goldLight transition-all duration-300 ease-linear"
                      >
                        {category.title}
                      </a>
                      <ul className="mt-4 flex flex-col items-start gap-4">
                        {category.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="peer peer-hover:opacity-50  hover:translate-x-2 hover:tracking-widest hover:text-goldLight transition-all duration-300 ease-linear"
                          >
                            <a href={subLink.link}>{subLink.title}</a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col items-start gap-4">
                  {navLinksEvents.map((category) => (
                    <li key={category.id} className="group list-none">
                      <a
                        href={category.link}
                        className="text-4xl font-title hover:translate-x-2 hover:tracking-wider hover:text-goldLight transition-all duration-300 ease-linear"
                      >
                        {category.title}
                      </a>
                      <ul className="mt-4 flex flex-col items-start gap-4">
                        {category.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="peer peer-hover:opacity-50 hover:translate-x-2 hover:tracking-widest hover:text-goldLight transition-all duration-300 ease-linear"
                          >
                            {/* <a href={`${subLink.link}`}>
                              {subLink.title}
                            </a> */}

                            <a href={`/events#${subLink.id}`}>
                              {subLink.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center flex-col gap-1 bg-pink-gold h-full ">
              <a href="/">
                <img
                  src={logo}
                  alt="Footer Logo"
                  className="w-40 h-auto object-contain mb-4"
                  // style={{
                  //   filter:
                  //     "brightness(0) saturate(100%) invert(0%) sepia(82%) saturate(7492%) hue-rotate(123deg) brightness(77%) contrast(93%)",
                  // }}
                />
              </a>
              <p className="mb-4">Hotel Ichchha</p>
              <p> Simara, Bara, Nepal</p>
              <p>+977-9802738099</p>
              <p>info@hotelichchha.com</p>
              <div className="footer-about-social-list mt-6 text-2xl">
                <a
                  href="https://www.facebook.com/ichchhahotel/"
                  target="_blank"
                  className="inline-block mr-4"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/hotel_ichchha/?hl=en"
                  target="_blank"
                  className="inline-block mr-4"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g21156991-d11283455-Reviews-Hotel_Ichchha-Pipara_Simara_Narayani_Zone_Central_Region.html"
                  target="_blank"
                  className="inline-block"
                >
                  <FaTripadvisor />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
