import React from "react";
import { aboutContents, introVideo, ichchha } from "../../constants/data.js";
import ScrollReveal from "../ScrollReveal";

const AboutHome = () => {
  return (
    <>
      <section className="about bg-bg-gold-light">
        <div className="container mx-auto">
          {aboutContents.map((content) => (
            // <div key={content.id} className="flexCenter flex-col w-3/4 mx-auto">
            //   {/* <h2>{content.title}</h2> */}
            //   <h3 className="text-navy font-medium">{content.subtitle}</h3>
            //   <h4 className="text-center">{content.subheading}</h4>
            //   <p className="text-lg text-center">{content.description}</p>
            // </div>
            <div key={content.id}>
              <ScrollReveal
                heading={content.subtitle}
                subheading={content.subheading}
                para={content.description}
                textColor="text-navy"
                highlightColor="text-navy"
                paraColor="text-navy"
              />
            </div>
          ))}

          <div className="video mt-28 h-full lg:h-[35rem] overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              id="backgroundVideo"
              poster={ichchha}
            >
              <source src={introVideo} type="video/mp4" />
              Hotel Ichchha
            </video>
            {/* <img src={ichchha} alt="" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
