import React, { useState } from "react";
import { galleryImages } from "../../constants/data.js";

const GallerySlider = () => {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleAnimation = () => {
    setIsAnimationPaused(!isAnimationPaused);
  };

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => setSelectedImage(null), 300); // Delay to allow the fade-out animation
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="relative overflow-hidden ">
        <div
          className={`photobanner whitespace-nowrap flex items-center gap-4 h-64 hover:animation-paused`}
          onMouseEnter={() => setIsAnimationPaused(true)}
          onMouseLeave={() => setIsAnimationPaused(false)}
        >
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`relative ${
                index % 2 === 0 ? "w-96" : "w-52"
              } h-64 mr-4 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer`}
              onClick={() => openPopup(image)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-all duration-700 ease-in-out z-50 ${
            isPopupVisible
              ? "opacity-1 backdrop-blur-sm"
              : "opacity-0 backdrop-blur-none"
          }`}
          onClick={closePopup}
        >
          <div
            className={`max-w-4xl w-full p-4 bg-white rounded-xl shadow-md transition-all duration-700 ease-in-out ${
              isPopupVisible
                ? "scale-1 translate-y-0"
                : "scale-0 -translate-y-full"
            }`}
            onClick={(event) => handleImageClick(event)}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="rounded-lg"
            />
          </div>
          <button
            className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default GallerySlider;
