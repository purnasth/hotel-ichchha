import React from "react";
import Navbar from "./components/Navbar";
// About
import { aboutContents, introVideo, ichchha } from "./constants/data";

const App = () => {
return (
<>
<div className="" style={{
        backgroundImage: `url(${ichchha})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}>

        <Navbar />
      </div>


      <section className="about relative">
        <div className="container mx-auto">
          {aboutContents.map((content) => (
            <div key={content.id} className="flexCenter flex-col w-3/4 mx-auto z-20">
              <h2>{content.title}</h2>
              <h4>{content.subtitle}</h4>
              {/* <p className="text-xl text-center">{content.description}</p> */}
            </div>
          ))}

          <div className="video mt-28">
            {/* <iframe
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
              frameborder="0"
              height="650px"
              src="https://www.youtube.com/embed/R_Fhk2a4uII?autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=R_Fhk2a4uII"
              width="100%"
            ></iframe> */}
            <div className="absolute w-full h-screen inset-0 -z-10 bg-gradient-to-t from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.4)]"></div>

            {/* <video width="100%" height="100%" autoPlay loop muted playsInline id="backgroundVideo" poster={ichchha} className="absolute inset-0 -z-20">
              <source src={introVideo} type="video/mp4" />
              Hotel Ichchha
            </video> */}


            <img src={ichchha} alt="" className="absolute inset-0 -z-20 w-full h-screen object-cover" />
          </div>
        </div>
      </section>


    </>

);
};

export default App;

<!-- Single Slider Testimonails -->

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
<div className="p-6 rounded-lg shadow-lg">
<p className="text-lg">{testimonial.content}</p>
<div className="flex items-center justify-between gap-4">
<p className="text-xl font-bold mt-4"> - {testimonial.author}
</p>
<p className="text-base mt-2">- via {testimonial.source}</p>
</div>
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



<!-- Facilities Backup -->
import React from "react";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { facilitiesSectionIcon } from "../../constants/data.js";

const FacilitiesSection = () => {
  return (
    <>
      <section className="bg-bg-gold-dark">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
            <h3 className="text-navy font-medium">
              Lorem ipsum dolor sit amet.
            </h3>
            <h4 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate velit voluptas odit esse cumque doloremque quod.
            </h4>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              obcaecati maxime corrupti velit cum accusamus officia dignissimos
              perferendis, numquam quo, laudantium ducimus distinctio, delectus
              fugiat culpa animi magnam sint ipsa tempora quas repudiandae!
              Sequi velit ea corrupti facilis minus a praesentium totam, tenetur
              repellat eos maxime, deleniti qui tempore ullam!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
            {Object.values(facilitiesSectionIcon).map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-ivory p-4 rounded-md shadow-md"
              >
                {/* <img
                  src={facility.icon}
                  alt={facility.title}
                  className="w-12 h-12 mb-2"
                /> */}
                <MdOutlineInsertEmoticon className="w-12 h-12 mb-2" />
                <h3 className="text-lg font-semibold">{facility.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesSection;
