import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventVenues } from "../constants/data";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ReusableSlider from "./ReusableSlider";

const EventsHall = () => {
  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">
              Lorem ipsum dolor sit amet.
            </h3>
            <h4 className="text-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              omnis.
            </h4>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              rerum minus sequi, quae ullam vero dignissimos, quisquam numquam
              commodi expedita esse adipisci animi impedit magni! Obcaecati, quo
              nostrum nihil minima nemo vero sit debitis quis optio, sint, sed
              voluptas officia?
            </p>
          </div>
          {Object.values(eventVenues).map((venue, index) => (
            <div
              key={venue.id}
              id={venue.id}
              className={`flex items-center gap-10 mt-32 max-w-5xl mx-auto ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <div className="w-full">
                <ReusableSlider
                  images={venue.imageUrls}
                  alt={venue.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="w-full">
                <div className="mt-0">
                  <h4>{venue.title}</h4>
                  <p>{venue.description}</p>
                  <ul className="flex items-center gap-4 py-4">
                    {venue.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <MdOutlineInsertEmoticon />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={venue.enquiryLink}
                    className="bg-gold/50 text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  >
                    Enquiry
                  </a>
                  {/* <a
                    href={venue.enquiryLink}
                    className="ml-4 bg-navy text-gold hover:text-navy hover:bg-gradient px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  >
                    Book Now
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventsHall;
