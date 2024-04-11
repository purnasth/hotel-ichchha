import React from "react";
import ichchha from "../assets/ichchha.webp";
// import Navbar from "./Navbar";
import Accomodation from "./Rooms/Accomodation";
import Testimonials from "./Testimonials/Testimonials";
import Facilities from "./Facilities/Facilities";
import NearbyLocations from "./Nearby";
import Footer from "./Footer";
import AboutHome from "./About/AboutHome";
import Navbar from "./Navbar";
import HeroSliderCarousel from "./HeroSliderCarousel";
import GallerySlider from "./Gallery/GallerySlider";
import GalleryHome from "./Gallery/GalleryHome";
import BookNowSection from "./Contact/BookNowSection";
import {sliderImages} from "../constants/data";

const Home = () => {
  return (
    <>
      <BookNowSection />
      <Navbar />

      <HeroSliderCarousel
        images={sliderImages}
        className="w-screen h-screen object-cover"
      />

      <AboutHome />
      <Accomodation />
      <Facilities />
      <Testimonials />
      <NearbyLocations />
      <GalleryHome />

      <Footer />
    </>
  );
};

export default Home;
