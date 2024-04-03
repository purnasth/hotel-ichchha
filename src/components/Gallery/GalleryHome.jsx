import React, { useState } from "react";
import Slider from "react-slick";
import { galleryImages } from "../../constants/data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  return (
    <div id="gallery" className="bg-pink-gold p-0 overflow-hidden h-auto">
      <Slider {...settings}>
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden group"
            style={{ perspective: "1000px" }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-60 object-cover shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 cursor-pointer"
              onClick={() => openModal(image)}
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] opacity-50 w-full h-full pointer-events-none"></div>
          </div>
        ))}
      </Slider>
      {isOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="modal-content max-w-3/4 max-h-3/4">
            <button
              className="close-button absolute top-0 right-4 m-4 text-white text-5xl focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryHome;
