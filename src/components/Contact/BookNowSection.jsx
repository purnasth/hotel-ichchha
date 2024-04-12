import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const BookNowSection = () => {
  const handleBookNow = () => {
    console.log("Book Now");
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-30">
      <div className="container flex justify-around items-center">
        <div className="flex flex-row items-center gap-3 relative">
          <label htmlFor="check-in-date">Check-In Date</label>
          <div className="relative">
            <input
              type="date"
              id="check-in-date"
              name="date"
              className="text-lg w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
              required
            />
          </div>
        </div>
        <div className="flex">
          {/* <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-goldLight text-navy px-6 py-2 rounded-full text-base transition-all duration-150 ease-linear"
            onClick={handleBookNow}
          >
            Book Now
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button> */}
          <a
            href="https://www.hotelichchha.com/result.php?hotel_code=8fE7Jg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-goldLight text-navy px-6 py-2 rounded-full text-base transition-all duration-150 ease-linear"
          >
            Book Now
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </a>
        </div>
        <div className="flex flex-row items-center gap-5 relative">
          <label htmlFor="check-out-date">Check-Out Date</label>
          <div className="relative">
            <input
              id="check-out-date"
              type="date"
              name="date"
              className="text-lg w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowSection;
