import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import purna from "../assets/purnaa.webp";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false); // Update isPopupVisible to false when closing the popup
    setTimeout(() => {
      setIsOpen(false); // Set isOpen to false after the animation completes
    }, 700); // Match the duration with the CSS transition duration
  };

  const handleBackgroundClick = (event) => {
    // Check if the click happened outside the image area
    if (!event.target.closest(".popup-image")) {
      closePopup();
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className={`bg-black/60 backdrop-blur-md fixed top-0 left-0 h-full w-full flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
            isPopupVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleBackgroundClick}
        >
          <button
            onClick={closePopup}
            className="text-white hover:text-white/50 transition-all duration-500 text-4xl absolute top-4 right-4 z-10"
          >
            <IoClose />
          </button>
          <div
            className={`max-w-4xl size-auto bg-white rounded-xl shadow-md transition-all duration-500 ease-in-out ${
              isPopupVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-100 -translate-y-full"
            }`}
          >
            <div className="relative rounded-xl overflow-hidden h-1/2">
              <div className="absolute bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.9)] bottom-0 rounded-xl rounded-b-none  w-full h-40" />
              <img
                src={purna}
                alt="Purna Shrestha"
                className="w-full h-[70vh] object-cover object-center rounded-xl popup-image"
              />
              <div className="absolute bottom-0 p-4">
                <p className="text-lg font-medium text-white/70">
                  This website is a snapshot of the Hotel Ichchha website made by{" "}
                  <a
                    href="https://purnashrestha.com.np/"
                    target="_blank"
                    className="underline text-white"
                  >
                    Purna Shrestha
                  </a>
                  . You can find the updated website at{" "}
                  <a
                    href=""
                    target="_blank"
                    className="underline text-white"
                  ></a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
