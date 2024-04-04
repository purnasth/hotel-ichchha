import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="container flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">
              Explore Our Exciting Recreation Venues
            </h3>
            <h4 className="text-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              reiciendis quaerat, ducimus quod cum placeat maxime?
            </h4>
            <p className="text-base text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus autem doloribus sint id aliquam cupiditate ea
              architecto accusamus, laudantium, quam perferendis esse ab ullam
              maiores sit quis maxime enim sapiente aperiam nam obcaecati porro
              debitis dolores? Nostrum, rem rerum officiis tempora iure,
              necessitatibus blanditiis quisquam obcaecati similique, atque nam.
              Impedit, voluptates! Vel quibusdam incidunt similique cum minima
              deleniti accusamus commodi!
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
                <button
                  onClick={toggleEnquiryForm}
                  className="bg-goldLight text-navy hover:bg-navy hover:text-ivory px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                >
                  Enquiry
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
      {showEnquiryForm && <EnquiryForm onClose={toggleEnquiryForm} />}
    </>
  );
};

export default Recreation;