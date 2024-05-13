import React from "react";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";

const Footer = () => {
  return (
    <div className="bg-pink-gold text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <Logo />

              <ContactAddressLinks />

              <SocialLinks />
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Quick Links</h3>
              <ul className="list-none space-y-4">
                <li className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in">
                  <a href="/about">About Us</a>
                </li>
                <li className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in">
                  <a href="/accommodation">Rooms & Suites</a>
                </li>
                <li className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in">
                  <a href="/restaurants">Restaurant & Bar</a>
                </li>
                <li className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in">
                  <a href="/events">Conference & Events</a>
                </li>
                <li className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in">
                  <a href="/recreation">Services & Facilities</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Room Booking</h3>
              <ul className="flex flex-col list-none space-y-2">
                <li className="flex gap-2 flex-wrap">
                  <a
                    href="tel:+9779855029591"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779855029591
                  </a>
                  <a
                    href="tel:+9779802738092"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779802738092
                  </a>
                  <a
                    href="tel:+9779855029592"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779855029592
                  </a>
                </li>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  info@hotelichchha.com
                </a>
              </ul>
              <h3 className="hidden md:block font-bold text-lg my-8">
                Conference & Events Booking
              </h3>
              <ul className="flex flex-col list-none space-y-2">
                <a
                  href="tel:+9779855029591"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  +977-9855029591
                </a>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  info@hotelichchha.com
                </a>
              </ul>
            </div>
            <div className="hidden lg:block footer-column">
              <h3 className="font-bold text-lg mb-8">Dining Reservation</h3>
              <ul className="flex flex-col list-none space-y-2">
                <li className="flex gap-2 flex-wrap">
                  <a
                    href="tel:+9779855029591"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779855029591
                  </a>
                  <a
                    href="tel:+9779802738092"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779802738092
                  </a>
                  <a
                    href="tel:+9779855029592"
                    target="_blank"
                    rel="noopener"
                    className="text-navy hover:text-gold transition-all duration-300 ease-in"
                  >
                    +9779855029592
                  </a>
                </li>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  info@hotelichchha.com
                </a>
              </ul>
              <h3 className="font-bold text-lg my-8">Recreation</h3>
              <ul className="flex flex-col list-none space-y-2">
                <a
                  href="tel:+9779855029591"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  +977-9855029591
                </a>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                  className="text-navy hover:text-gold transition-all duration-300 ease-in"
                >
                  info@hotelichchha.com
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="container w-full h-px bg-gradient-to-l from-transparent via-navy/50 to-transparent -translate-y-20" />
      <div className="container mx-auto py-4 -translate-y-20">
        <div className="flex flex-col md:flex-row justify-between gap-3 px-6 md:px-0">
          <p className="text-sm">&copy; 2024 Hotel Ichchha Pvt. Ltd.</p>
          <p className="text-sm">
            Website by{" "}
            <a
              href="https://longtail.info/"
              target="_blank"
              className="underline"
            >
              Longtail e-media
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
