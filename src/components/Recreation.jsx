import React, { useState } from "react";
import { recreationVenues } from "../constants/data";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ReusableSlider from "./ReusableSlider";
import EnquiryForm from "./Contact/EnquiryForm";

const Recreation = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm((prevState) => !prevState);
  };

  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="container flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">
              Discover Our Exciting Recreation
            </h3>
            <h4 className="text-3xl text-center">
              Unwind, Recharge, and Explore: Your Adventure Awaits in Every
              Recreational Endeavor.
            </h4>
            <p className="text-base text-center">
              Escape to Hotel Ichchha recreational oasis. Unwind with luxurious
              spa treatments, energize in our state-of-the-art gym, or bask by
              the serene poolside. Our dedicated leisure concierge ensures every
              moment is pure bliss. Perfect for relaxation seekers and adventure
              enthusiasts.
            </p>
          </div>
        </div>
        {Object.values(recreationVenues).map((venue, index) => (
          <div
            key={venue.id}
            className={`flex items-center gap-10 mt-32 mx-auto ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="w-full">
              <ReusableSlider
                images={venue.imageUrls}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="w-full">
              <div className="mt-0">
                <h4 className="mb-2">{venue.title}</h4>
                <p>{venue.description}</p>
                <ul className="flex items-center gap-4 py-4">
                  {venue.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MdOutlineInsertEmoticon />
                      {amenity}
                    </li>
                  ))}
                </ul>
                {/* <button
                  onClick={toggleEnquiryForm}
                  className="bg-goldLight text-navy hover:bg-navy hover:text-ivory px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                >
                  Enquiry
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </section>
      {showEnquiryForm && <EnquiryForm onClose={toggleEnquiryForm} />}
    </>
  );
};

export default Recreation;
