import React from "react";
import { logo } from "../constants/data";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-pink-gold text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footer-column">
              <img
                src={logo}
                alt="Hotel Ichchha"
                className="w-40 h-auto object-contain mb-4"
                // style={{
                //   filter:
                //     "brightness(0) saturate(100%) invert(0%) sepia(82%) saturate(7492%) hue-rotate(123deg) brightness(77%) contrast(93%)",
                // }}
              />
              <p className="mb-4">Hotel Ichchha</p>
              <p> Simara, Bara, Nepal</p>
              <p>+977-9802738099</p>
              <p>info@hotelichchha.com</p>
              <div className="footer-about-social-list mt-6 text-2xl">
                <a href="#" className="inline-block mr-4">
                  <FaFacebook />
                </a>
                <a href="#" className="inline-block mr-4">
                  <FaInstagram />
                </a>
                <a href="#" className="inline-block">
                  <FaTripadvisor />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Quick Links</h3>
              <ul className="list-none space-y-4">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Restaurant & Bar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Conference & Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Services & Facilities
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Room Booking</h3>
              <ul className="list-none space-y-2">
                <p>+977 9802738092, 9855029591, 9855029592</p>
                <p>info@hotelichchha.com</p>
              </ul>
              <h3 className="font-bold text-lg my-8">
                Conference & Events Booking
              </h3>
              <ul className="list-none space-y-2">
                <p>+977 9855029591</p>
                <p>info@hotelichchha.com</p>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Dining Reservation</h3>
              <ul className="list-none space-y-2">
                <p>+977 9802738092, 9855029591, 9855029592</p>
                <p>info@hotelichchha.com</p>
              </ul>
              <h3 className="font-bold text-lg my-8">Recreation</h3>
              <ul className="list-none space-y-2">
                <p>+977 9855029591</p>
                <p>info@hotelichchha.com</p>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container w-full h-px bg-gradient-to-l from-transparent via-navy/50 to-transparent -translate-y-20" />
      <div className="container mx-auto py-4 -translate-y-20">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Hotel Ichchha Pvt. Ltd.</p>
          <p className="text-sm">
            Website by{" "}
            <a href="https://longtail.info/" target="_blank" className="underline">
              Longtail e-media
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
