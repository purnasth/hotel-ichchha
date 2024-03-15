import React from "react";
import ichchha from "../assets/ichchha.webp";
import Navbar from "./Navbar";
import Accomodation from "./Rooms/Accomodation";
import Testimonials from "./Testimonials/Testimonials";
import Facilities from "./Facilities/Facilities";
import Gallery from "./Gallery/Gallery";
import NearbyLocations from "./Nearby";
import Footer from "./Footer";
import AboutHome from "./About/AboutHome";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${ichchha})`,
        }}
      >
        <Navbar />
      </div>

      <AboutHome />
      <Accomodation />
      <Facilities />
      <Testimonials />
      <NearbyLocations />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
