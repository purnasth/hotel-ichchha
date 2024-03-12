import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialContents } from "../../constants/data.js";

const Testimonials = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="bg-bg-gold-dark px-0">
      <div className="container mx-auto">
        <div className="flexCenter p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-start justify-center gap-4 flex-col">
              <h2 className="text-4xl">{testimonialContents[0].title}</h2>
              <h4 className="text-xl">{testimonialContents[0].subtitle}</h4>
              <p className="text-base">{testimonialContents[0].subheading}</p>
            </div>
            <div className="button flex items-center justify-center gap-4">
              <button onClick={handlePrevSlide}>Prev</button>
              <button onClick={handleNextSlide}>Next</button>
            </div>
          </div>
        </div>
        <div className="video mt-10">
          <Slider {...settings} ref={sliderRef}>
            {testimonialContents[0].testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg">{testimonial.content}</p>
                  <p className="text-base mt-4">- {testimonial.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
