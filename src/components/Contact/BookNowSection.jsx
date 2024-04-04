import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { HiArrowLongRight } from "react-icons/hi2";

const BookNowSection = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
  const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
    if (!checkOutDate || date > checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const toggleCheckInCalendar = () => {
    setIsCheckInCalendarOpen(!isCheckInCalendarOpen);
  };

  const toggleCheckOutCalendar = () => {
    setIsCheckOutCalendarOpen(!isCheckOutCalendarOpen);
  };

  const handleBookNow = () => {
    // Handle book now action here
    console.log("Book Now");
  };

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-30">
      <div className="container flex justify-around items-center">
        <div className="flex flex-row items-center gap-3 relative">
          <label htmlFor="check-in-date">Check-In Date</label>
          <div className="relative">
            {/* <input
              id="check-in-date"
              type="text"
              value={checkInDate.toDateString()}
              readOnly
              className="mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              onClick={toggleCheckInCalendar}
            />
            {isCheckInCalendarOpen && (
              <Calendar
                onChange={handleCheckInDateChange}
                value={checkInDate}
                selectRange={false}
                minDate={new Date()}
                className="absolute top-0 left-0 -translate-y-full -mt-8"
              />
            )} */}
            <input
              type="date"
              id="check-in-date"
              name="date"
              // value={formData.date}
              // onChange={handleChange}
              className="text-lg w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
              required
            />
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="w-full group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-goldLight text-navy px-6 py-2 rounded-full text-base transition-all duration-150 ease-linear"
            onClick={handleBookNow}
          >
            Book Now
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </button>
        </div>
        <div className="flex flex-row items-center gap-5 relative">
          <label htmlFor="check-out-date">Check-Out Date</label>
          <div className="relative">
            {/* <input
              id="check-out-date"
              type="text"
              value={checkOutDate ? checkOutDate.toDateString() : ""}
              readOnly
              className="mt-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              onClick={toggleCheckOutCalendar}
            />
            {isCheckOutCalendarOpen && (
              <Calendar
                onChange={handleCheckOutDateChange}
                value={checkOutDate || checkInDate}
                selectRange={false}
                minDate={checkInDate}
                className="absolute top-0 left-0 -translate-y-full -mt-8"
              />
            )} */}
            <input
              id="check-out-date"
              type="date"
              name="date"
              // value={formData.date}
              // onChange={handleChange}
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
