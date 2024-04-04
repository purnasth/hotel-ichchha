import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { PiCallBell } from "react-icons/pi";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { facilitiesSectionIcon } from "../../constants/data.js";

const ExploreFacilitiesButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   const scrollThreshold = 200;

      //   if (window.scrollY > scrollThreshold) {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  return (
    <div>
      <button
        className={`z-50 fixed bottom-4 left-8 bg-goldLight backdrop-blur-md text-navy p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-goldLight/50 ${
          showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
        }`}
        onClick={toggleNavbar}
      >
        <PiCallBell className="w-6 h-6 text-navy" />
      </button>
      <Navbar showNavbar={showNavbar} onClose={() => setShowNavbar(false)} />
    </div>
  );
};

const Navbar = ({ showNavbar, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-72 max-h-screen overflow-y-scroll bg-bg-gold-light z-[60] transition-transform duration-300 transform ${
        showNavbar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="sticky top-0 bg-bg-gold-light flex justify-between p-6">
        <h4 className="text-2xl">Facilities</h4>
        <button className="-mr-4" onClick={onClose}>
          <IoClose className="text-2xl" />
        </button>
      </div>
      {Object.values(facilitiesSectionIcon).map((facility, index) => (
        <div
          key={index}
          className="flex items-center justify-start bg-ivor gap-4 p-4 px-6"
        >
          {/* <img
                  src={facility.icon}
                  alt={facility.title}
                  className="w-12 h-12 mb-2"
                /> */}
          <MdOutlineInsertEmoticon className="text-xl" />
          <span className="text-lg font-semibold">{facility.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ExploreFacilitiesButton;
