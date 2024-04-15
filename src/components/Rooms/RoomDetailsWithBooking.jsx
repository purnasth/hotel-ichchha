import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const RoomDetailsWithBooking = ({ roomDetails, bookingLink }) => {
  return (
    <div className="ml-auto w-1/2 h-[80vh] sticky top-6">
      <div className="bg-gold/30 text-xl p-12">
        {Object.entries(roomDetails).map(([key, { icon: Icon, value }]) => (
          <div key={key}>
            <ul className="flex items-center justify-between gap-2 py-8">
              <li className="flex items-center gap-4">
                <Icon />
                {key}
              </li>
              <li>{value}</li>
            </ul>
            <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />
          </div>
        ))}

        <div className="pt-12 w-full">
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full bg-navy text-ivory hover:text-navy hover:bg-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
          >
            Book Now
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsWithBooking;
