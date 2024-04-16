import React from "react";
import Accomodation from "./Rooms/Accomodation";
import Testimonials from "./Testimonials/Testimonials";
import Facilities from "./Facilities/Facilities";
import NearbyLocations from "./Nearby";
import AboutHome from "./About/AboutHome";
import HeroSliderCarousel from "./HeroSliderCarousel";
import GalleryHome from "./Gallery/GalleryHome";
import BookNowSection from "./Contact/BookNowSection";
import {sliderImages} from "../constants/data";

const Home = () => {
  return (
    <>
      <BookNowSection />
      <HeroSliderCarousel
        images={sliderImages}
        className="w-screen lg:h-full min-h-96 object-cover"
      />

      <AboutHome />
      <Accomodation />
      <Facilities />
      <Testimonials />
      <NearbyLocations />
      <GalleryHome />
    </>
  );
};

export default Home;
