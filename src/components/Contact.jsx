import React, { useEffect } from "react";
import { gsap } from "gsap";
import NearbyMapComponent from "./Nearby/NearbyMapComponent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./Contact/Form";
import TripAdvisorWidget from "./TripAdvisorWidget";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";

const Contact = () => {
  useEffect(() => {
    gsap.from(".form-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container mx-auto">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            {/* <h2></h2> */}
            <h3 className="text-navy font-medium">
              How to get to Hotel Ichchha?
            </h3>
            <h4 className="text-center">
              Reach Out, Connect, and Spark Possibilities - Your Gateway to
              Seamless Communication.
            </h4>
            <p className="text-lg text-center">
              {/* Would you like to find our how to get to us or you have a question
              you need to ask? Call us or e-mail us, here are all the contact
              information you need to know. */}
              Have any inquiries? Reach out to Hotel Ichchha dedicated team.
              Whether it's booking accommodations, event planning, or dietary
              preferences, we're here to ensure your experience is seamless and
              memorable. Connect with us today for personalized service and
              support!"
            </p>
          </div>
        </div>
        <div className="mt-28">
          <NearbyMapComponent />
        </div>
      </section>

      <section className="bg-bg-gold-dark">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-1/2 max-w-lg">
              {/* <h5 className="text-3xl leading-loose pb-4">
                About Hotel Ichchha
              </h5>
              <p className="pb-4">
                Hotel Ichchha is a verdant oasis in the heart of Simara.The
                hotel aims to cater and accommodate business and leisure
                travelers passing through the zone.
              </p>
              <p className="pb-4">
                The homely ambience, facilities and amenities within the
                premises make your stay a memorable and luxurious one. We are
                one of the leading hospitality providers assuring our best
                services. Centrally located, its an ideal choice for business
                travelers, pilgrimage tour, recreational tours, etc. The best
                choice for destination wedding to make your special moments more
                memorable. With a total of 90 rooms, Hotel Ichchha is best
                suited for all your requirements.
              </p> */}

              <h5 className="text-3xl leading-loose py-4">Find Us</h5>

              <div className="space-y-2">
                <ContactAddressLinks />
              </div>

              <SocialLinks />

              <div className="mt-12">
                <h5 className="text-3xl leading-loose py-4">Review Us</h5>

                <TripAdvisorWidget />
              </div>
            </div>
            <div className="ml-auto w-1/2 h-full sticky top-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
