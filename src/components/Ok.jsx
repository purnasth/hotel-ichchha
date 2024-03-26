import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="max-w-screen overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className="relative">
          {/* <div className="overlay absolute inset-0 bg-black opacity-50 z-0"></div> */}
          <div className="overlay absolute h-64 inset-0 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-0"></div>
          <img
            src={image.src}
            alt={image.title}
            className="w-screen h-screen object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-gold p-2">
            <h3 className="text-5xl pt-16 p-8 text-center">{image.title}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCarousel;
