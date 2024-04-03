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
import Popup from "./Popup";

const images = [
  {
    src: ichchha,
    title: "Hotel Ichchha, Hospitality at its best!",
  },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/UVh7T-ichchha-room.jpg",
  //   title: "The Homely Ambience",
  // },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/mmMDi-pool.jpg",
  //   title: "Plentiful sunbeams streaming pool",
  // },
  {
    src: "https://s3-alpha-sig.figma.com/img/84cf/a38a/65923184216c09d7f3dcab6961136f45?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H~ZakV3Kt5v697SLSpU9WQu7M6fvc90iqu0RcguhVcp6m-IlzBmpFaWEEnTdmqXXNVD4ZkD80O8kP0CTdL0IVNlykFb~L3jc~wu2uMhtuyx4RStFVvuAIp-nL4sQe2otFmce3TbcBclgNf~Aq0iYymLjVOtf7IswSI89Ntk~2kdMxKfwDs1Cg-ErHEHuZzNweWtOKnWJYCBvpG0Y7KZHOjJieytpn-hkMCYO~jOLKwIA2yV8w30syheqjbHlzLhp-Uy3uyv9q9wODFUzTtqd1zg-tYpuHiPJepWV9OdnJV0RVZ6qfR~eqLcYhezGrjaO879siYdKK2nr~uwKg8V4Jg__",
    title: "The Hotel Ichchha",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />

      <HeroSliderCarousel
        images={images}
        className="w-screen h-screen object-cover"
      />

      <AboutHome />
      <Accomodation />
      <Facilities />
      <Testimonials />
      <NearbyLocations />
      <GalleryHome />

      <Footer />
      <Popup />
    </>
  );
};

export default Home;
