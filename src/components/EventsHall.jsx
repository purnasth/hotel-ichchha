import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventVenues } from "../constants/data";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ReusableSlider from "./ReusableSlider";
import EnquiryForm from "./Contact/EnquiryForm";

const EventsHall = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">Conference & Events</h3>
            <h4 className="text-3xl text-center">
              Where every occasion sparkles with Ichchha touch
            </h4>
            <p className="text-base text-center">
              Elevate your events at Hotel Ichchha versatile halls. From
              intimate gatherings to grand celebrations, our spaces offer luxury
              and convenience. Your memorable moments, our impeccable service.
              Welcome to perfection.
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
                  <h4 className="mb-2">{venue.title}</h4>
                  <p>{venue.description}</p>
                  <ul className="flex items-center gap-4 py-4">
                    {venue.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {/* <MdOutlineInsertEmoticon /> */}
                        {amenity}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={toggleEnquiryForm}
                    className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  >
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      {showEnquiryForm && <EnquiryForm onClose={toggleEnquiryForm} />}{" "}
      {/* Render EnquiryForm if showEnquiryForm is true */}
    </>
  );
};

export default EventsHall;
