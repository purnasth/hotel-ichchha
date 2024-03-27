import React, { useState } from "react";
import { testimonialContents } from "../../constants/data.js";

const Testimonials = () => {
  const [selectedPerson, setSelectedPerson] = useState(
    testimonialContents[0].testimonials[0].author
  );
  const [isVisible, setIsVisible] = useState(true);

  const handlePersonClick = (person) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedPerson(person);
      setIsVisible(true);
    }, 400);
  };

  return (
    <section id="testimonials" className="bg-bg-gold-dark px-0">
      <div className="container mx-auto">
        <div className="flexCenter flex-col w-3/4 p-4 mx-auto text-navy text-center">
          <h3 className="font-medium">{testimonialContents[0].title}</h3>
          <h4 className="">{testimonialContents[0].subheading}</h4>
          <p className="text-lg">{testimonialContents[0].description}</p>
        </div>
        <div className="flex mt-24">
          <div className="w-1/4 h-96 overflow-y-auto bg-ivory/10">
            {testimonialContents[0].testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => handlePersonClick(testimonial.author)}
                className={`cursor-pointer transition-all duration-400 ease-linear ${
                  selectedPerson === testimonial.author ? "bg-gold/30" : ""
                }`}
              >
                <div className="flex items-center justify-start gap-4 p-6 py-4 border-b-[1px] border-navy/10 ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="flex items-start flex-col gap-0">
                    <p className="text-xl font-bold">{testimonial.author}</p>
                    <p className="text-base text-navy/50">
                      - via {testimonial.source}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/4 h-96 overflow-y-auto">
            <div
              className={`px-4 ${
                isVisible
                  ? "scale-100 translate-x-0"
                  : "scale-0  -translate-x-full"
              } transition-transform duration-700`}
            >
              {testimonialContents[0].testimonials
                .filter((testimonial) => testimonial.author === selectedPerson)
                .map((testimonial) => (
                  <div key={testimonial.id} className="px-6">
                    <p className="text-xl">{testimonial.content}</p>
                    <div className="flex items-center justify-start gap-12 mt-12">
                      <p className="text-xl font-bold">
                        - {testimonial.author}
                      </p>
                      <p className="text-base">- via {testimonial.source}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
