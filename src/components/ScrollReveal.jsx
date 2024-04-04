import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

function ScrollReveal({
  heading,
  subheading,
  para,
  textColor,
  paraColor,
  highlightColor,
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((splitType) => {
      const text = new SplitType(splitType, {
        types: "chars, words",
      });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: splitType,
          // start: "top 80%",
          start: "top 100%",
          // end: "top 20%",
          end: "top 100%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
        color: textColor,
      });
    });

    // Set the scroll duration to be slower
    gsap.to(window, {
      len: 10000, // Adjust the scroll duration as needed
      scrollTrigger: {
        scrub: 1, // Set scrub to 1 for a smooth scroll animation
      },
    });
  }, [heading, subheading, para, paraColor, textColor]);

  return (
    <>
      <div className="font-kalnia leading-normal font-medium reveal-type flexCenter flex-col w-3/4 mx-auto mb-8">
        <h3 className={`text-${textColor} text-navy font-medium`}>{heading}</h3>
        <h4 className={`text-${highlightColor} text-3xl text-center font-normal`}>{subheading}</h4>
        <p className={`text-${paraColor} text-lg text-center`}>{para}</p>
      </div>
    </>
  );
}

export default ScrollReveal;

// IMPLEMENTATION
{
  /* <ScrollReveal
heading="Explore and Experience What's on at Hotel Ichchha"
subheading="Unwind in the delight that is your home away from home. Our property's location offers a mix of quiet tranquillity and bustling hustle."
para="Embark on a journey of your business, leisure, pilgrimage, or adventure to discover the hospitality of Hotel Ichchha, From the Hotel’s vibrant restaurant and lounge to its tranquil gardens, this is where the city comes to connect and be inspired. Centrally located, it’s an ideal choice for business travelers, pilgrimage tours, and recreational tours. The best choice for a destination wedding is to make your special moments more memorable."
textColor="text-navy"
highlightColor="text-navy"
/> */
}
