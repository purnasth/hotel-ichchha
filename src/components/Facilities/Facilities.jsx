import React from "react";
import { hotelFacilities } from "../../constants/data.js";

const Facilities = () => {
  return (
    <section id="facilities" className="bg-bg-gold-light">
      <div className="container mx-auto">
        <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
          <h3 className="text-navy font-medium">
            Explore and Experience What's on at Hotel Ichchha
          </h3>
          <h4 className="text-center">
            Unwind in the delight that is your home away from home. Our
            property's location offers a mix of quiet tranquillity and bustling
            hustle.
          </h4>
          <p className="text-lg text-center">
            Embark on a journey of your business, leisure, pilgrimage, or
            adventure to discover the hospitality of Hotel Ichchha, From the
            Hotel’s vibrant restaurant and lounge to its tranquil gardens, this
            is where the city comes to connect and be inspired. Centrally
            located, it’s an ideal choice for business travelers, pilgrimage
            tours, and recreational tours. The best choice for a destination
            wedding is to make your special moments more memorable.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
        {hotelFacilities.map((facility) => (
          <div
            key={facility.id}
            className="relative overflow-hidden group"
            style={{ perspective: "1000px" }}
          >
            <img
              src={facility.icon}
              alt={facility.title}
              className="w-full h-[90vh] shadow-md transition duration-700 ease-in-out transform group-hover:scale-150"
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] w-full h-full"></div>
            <div
              className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-ivory text-center transition-all duration-700 ease-in-out transform translate-y-[50vh] group-hover:translate-y-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-4">
                <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {facility.title}
                </h3>
                <p className="text-ivory my-4">{facility.description}</p>
                <button className="text-ivory bg-transparent border border-solid border-ivory px-4 py-2 mt-2 hover:bg-ivory hover:text-navy transition duration-300 ease-in-out">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
