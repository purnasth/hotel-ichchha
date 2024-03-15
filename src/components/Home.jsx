import React from "react";
import ichchha from "../assets/ichchha.webp";
// import Navbar from "./Navbar";
import Accomodation from "./Rooms/Accomodation";
import Testimonials from "./Testimonials/Testimonials";
import Facilities from "./Facilities/Facilities";
import Gallery from "./Gallery/Gallery";
import NearbyLocations from "./Nearby";
import Footer from "./Footer";
import AboutHome from "./About/AboutHome";
import SliderCarousel from "./Ok";
import TempNavbar from "./TempNavbar";

const images = [
  {
    src: ichchha,
    title: "Hotel Ichchha, Hospitality at its best!",
  },
  {
    src: "https://www.hotelichchha.com/images/slideshow/UVh7T-ichchha-room.jpg",
    title: "The Homely Ambience",
  },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/he2xP-ichchha-events.jpg",
  //   title: "Image 3",
  // },
  {
    src: "https://www.hotelichchha.com/images/slideshow/mmMDi-pool.jpg",
    title: "Plentiful sunbeams streaming pool",
  },
  // Add more images as needed
];

const Home = () => {
  return (
    <>
      {/* <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${ichchha})`,
        }}
      > */}
      {/* <Navbar/> */}
      {/* </div> */}
      <TempNavbar />

      <SliderCarousel images={images} />

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
