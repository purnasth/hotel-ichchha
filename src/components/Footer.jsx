import React from "react";
import { logo } from "../constants/data";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gold/30 text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footer-column">
              <img
                src={logo}
                alt="Footer Logo"
                className="w-40 h-auto object-contain mb-4"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(0%) sepia(82%) saturate(7492%) hue-rotate(123deg) brightness(77%) contrast(93%)",
                }}
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
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="list-none">
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
              <h3 className="font-bold text-lg mb-4">Room & Hall Booking</h3>
              <ul className="list-none">
                <p className="mt-4">For Room & Other Informations</p>
                <p>+977 9802738092, 9855029591, 9855029592</p>
                <p>info@hotelichchha.com</p>
                <p className="mt-4">For Conference & Events</p>
                <p>+977 9855029591</p>
                <p>info@hotelichchha.com</p>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p>Hotel Ichchha Pvt. Ltd.</p>
              <p>+977 053 520591 | 92 | 93 | 94</p>
              <p>Simara, Bara, Nepal (View Map)</p>
              <p>+977-9802738099</p>
              <p>Rating: 5 Star</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.5] to-transparent" />
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Hotel Ichchha Pvt. Ltd.</p>
          <p className="text-sm">Developed by Longtail e-media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
