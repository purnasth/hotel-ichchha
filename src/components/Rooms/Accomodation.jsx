import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { accomodationContents } from "../../constants/data.js";

const Accomodation = () => {
  const sliderRef = useRef(null);

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="rooms" className="bg-bg-gold-dark px-0">
      <div className="container mx-auto">
        <div className="flexCenter p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-start justify-center gap-4 flex-col">
              <h2 className="text-4xl">{accomodationContents[0].title}</h2>
              <h4 className="text-xl">{accomodationContents[0].subtitle}</h4>
              <p className="text-base">{accomodationContents[0].subheading}</p>
              {/* <p className="text-base">{accomodationContents[0].description}</p> */}
            </div>
            <div className="button flex items-center justify-center gap-4">
              <button onClick={handlePrevSlide}>Left</button>
              <button onClick={handleNextSlide}>Right</button>
            </div>
          </div>
        </div>
      </div>
      <div className="video mt-10 mx-0">
        <Slider {...settings} ref={sliderRef}>
          {accomodationContents[0].accomodation.map((room) => (
            <div key={room.id} className="p-4">
              <img
                src={room.url}
                alt={room.title}
                className="w-full h-72 rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold mt-4">{room.title}</h3>
              <p className="text-base">{room.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Accomodation;
