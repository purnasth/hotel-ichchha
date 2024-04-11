import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import { galleryImages } from "../../constants/data.js";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section>
        <section className="container flexCenter flex-col w-3/4 mx-auto pt-16">
          <h3 className="text-navy font-medium">Photo Gallery</h3>
          <h4 className="text-3xl text-center">
            Glimpse of Hotel Ichchha - Discover Beauty Beyond Words
          </h4>
          <p className="text-base text-center">
            Immerse yourself in luxury, comfort, and
            personalized service. From elegant rooms to impeccable amenities,
            discover hospitality at its finest. Elevate your stay with us.
            Welcome to a world of unparalleled indulgence.
          </p>
        </section>

        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen, lgShare]}
          mode="lg-fade"
          elementClassNames="w-full grid grid-cols-2 lg:grid-cols-4 gap-4"
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {galleryImages.map((image) => (
            <a
              key={image.id}
              className="group gallery-item overflow-hidden"
              data-src={image.url}
            >
              <img
                className="w-full h-72 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer"
                src={image.url}
                alt={image.alt}
              />
            </a>
          ))}
        </LightGallery>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
