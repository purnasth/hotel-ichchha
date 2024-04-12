import React from "react";
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <div className="bg-pink-gold text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <Logo />
              {/* <a href="#" target="_blank" rel="noopener" className="mb-4">
                Hotel Ichchha
              </a> */}
              <a
                href="https://maps.app.goo.gl/dJurNnE6cBLguX1cA"
                target="_blank"
                rel="noopener"
              >
                Simara, Bara, Nepal
              </a>
              <a href="tel:+9779802738099" target="_blank" rel="noopener">
                +977-9802738099
              </a>
              <a
                href="mailto:info@hotelichchha.com"
                target="_blank"
                rel="noopener"
              >
                info@hotelichchha.com
              </a>
              <div className="footer-about-social-list mt-6 text-2xl">
                <a
                  href="https://www.facebook.com/ichchahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-4"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/hotel_ichchha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mr-4"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tripadvisor.com/Hotel_Review-g21156991-d11283455-Reviews-Hotel_Ichchha-Pipara_Simara_Narayani_Zone_Central_Region.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <FaTripadvisor />
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Quick Links</h3>
              <ul className="list-none space-y-4">
                <li>
                  <a href="/about" className="hover:text-gold">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/accommodation" className="hover:text-gold">
                    Rooms & Suites
                  </a>
                </li>
                <li>
                  <a href="/restaurants" className="hover:text-gold">
                    Restaurant & Bar
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-gold">
                    Conference & Events
                  </a>
                </li>
                <li>
                  <a href="/recreation" className="hover:text-gold">
                    Services & Facilities
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Room Booking</h3>
              <ul className="flex flex-col list-none space-y-2">
                <li className="flex gap-2 flex-wrap">
                  <a href="tel:+9779855029591" target="_blank" rel="noopener">
                    +9779855029591
                  </a>
                  <a href="tel:+9779802738092" target="_blank" rel="noopener">
                    +9779802738092
                  </a>
                  <a href="tel:+9779855029592" target="_blank" rel="noopener">
                    +9779855029592
                  </a>
                </li>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@hotelichchha.com
                </a>
              </ul>
              <h3 className="font-bold text-lg my-8">
                Conference & Events Booking
              </h3>
              <ul className="flex flex-col list-none space-y-2">
                <a href="tel:+9779855029591" target="_blank" rel="noopener">
                  +977-9855029591
                </a>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@hotelichchha.com
                </a>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Dining Reservation</h3>
              <ul className="flex flex-col list-none space-y-2">
                <li className="flex gap-2 flex-wrap">
                  <a href="tel:+9779855029591" target="_blank" rel="noopener">
                    +9779855029591
                  </a>
                  <a href="tel:+9779802738092" target="_blank" rel="noopener">
                    +9779802738092
                  </a>
                  <a href="tel:+9779855029592" target="_blank" rel="noopener">
                    +9779855029592
                  </a>
                </li>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@hotelichchha.com
                </a>
              </ul>
              <h3 className="font-bold text-lg my-8">Recreation</h3>
              <ul className="flex flex-col list-none space-y-2">
                <a href="tel:+9779855029591" target="_blank" rel="noopener">
                  +977-9855029591
                </a>
                <a
                  href="mailto:info@hotelichchha.com"
                  target="_blank"
                  rel="noopener"
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
        <div className="flex justify-between items-center">
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
