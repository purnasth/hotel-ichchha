import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventVenues } from "../constants/data";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ReusableSlider from "./ReusableSlider";

const EventsHall = () => {
  useEffect(() => {
    const handleNavClick = (event) => {
      // Prevent default behavior
      event.preventDefault();

      // Get the href value of the clicked link
      const href = event.target.getAttribute("href");

      // Scroll to the corresponding section
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Attach click event listener to all navigation links
    const navLinks = document.querySelectorAll(".events-nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavClick);
    });

    // Cleanup function
    return () => {
      // Remove event listeners when the component unmounts
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container">
          <ul className="events-nav flex flex-col items-start gap-4">
            <li className="peer peer-hover:opacity-50  hover:translate-x-6 hover:tracking-widest hover:text-goldLight transition-all duration-300 ease-linear">
              <a href="/events" className="text-4xl font-title">
                Conference & Events
              </a>
            </li>
            {Object.values(eventVenues).map((venue) => (
              <li
                key={venue.id}
                className="peer peer-hover:opacity-50  hover:translate-x-6 hover:tracking-widest hover:text-goldLight transition-all duration-300 ease-linear"
              >
                <a href={`#${venue.id}`}>{venue.title}</a>
              </li>
            ))}
          </ul>
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
                    className="bg-navy text-gold hover:text-navy hover:bg-gradient px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  >
                    Enquiry
                  </a>
                  <a
                    href={venue.enquiryLink}
                    className="ml-4 bg-gold/50 text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  >
                    Book Now
                  </a>
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
