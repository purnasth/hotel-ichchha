import React, { useState } from "react";
import { eventVenues } from "../constants/data";
import ReusableSlider from "./ReusableSlider";
import EnquiryForm from "./Contact/EnquiryForm";
import ScrollReveal from "./ScrollReveal";

const EventsHall = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm((prevState) => !prevState);
  };

  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="my-12 md:my-0">
          <ScrollReveal
            heading="Conference & Events"
            subheading="Where every occasion sparkles with Ichchha touch"
            para="Elevate your events at Hotel Ichchha versatile halls. From
            intimate gatherings to grand celebrations, our spaces offer luxury
            and convenience. Your memorable moments, our impeccable service.
            Welcome to perfection."
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
        <div className="container">
          {Object.values(eventVenues).map((venue, index) => (
            <div
              key={venue.id}
              id={venue.id}
              className={`flex items-center flex-col gap-10 mt-16 mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full">
                <ReusableSlider
                  images={venue.imageUrls}
                  alt={venue.title}
                  className="w-full h-64 sm:h-96 lg:h-80 xl:h-96 object-cover"
                />
              </div>
              <div className="w-full">
                <div className="mt-0">
                  <h4 className="text-xl lg:text-3xl mb-2">{venue.title}</h4>
                  <p className="text-xs sm:text-sm lg:text-base text-justify">
                    {venue.description}
                  </p>
                  <ul className="flex items-center gap-4 py-4">
                    {venue.amenities.map((amenity, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-xs sm:text-sm xl:text-base"
                      >
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
      {showEnquiryForm && <EnquiryForm onClose={toggleEnquiryForm} />}{" "}
    </>
  );
};

export default EventsHall;
