import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const ReusableSlider = ({ images, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(imageRef.current, { duration: 1, opacity: 0, ease: "power1.inOut" });
    tl.to(imageRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
    });
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      delay: 1, // Delay after changing image
    });
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power1.inOut",
    });
    gsap.to(imageRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      delay: 1, // Delay after changing image
    });
  };

  return (
    <div className="slider">
      {images.length > 0 && (
        <img
          ref={imageRef}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={className}
        />
      )}
      <div className="flexCenter mt-4">
        <button
          onClick={prevSlide}
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
        >
          <HiArrowLongLeft className="group-hover:-translate-x-2 transition-all duration-150 ease-linear" />
        </button>
        <button
          onClick={nextSlide}
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
        >
          <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150 ease-linear" />
        </button>
      </div>
    </div>
  );
};

export default ReusableSlider;
