import React from "react";
import Navbar from "./components/Navbar";
import { ichchha } from "./constants/data";
import AboutHome from "./components/About/AboutHome";
import Accomodation from "./components/Rooms/Accomodation";
import Testimonials from "./components/Testimonials/Testimonials";
import Facilities from "./components/Facilities/Facilities";
import Gallery from "./components/Gallery/Gallery";
import NearbyLocations from "./components/Nearby";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";

const App = () => {
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

      {/* <Hero /> */}

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

export default App;
