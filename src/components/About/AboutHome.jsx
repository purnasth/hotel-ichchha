import React from "react";
import { aboutContents, introVideo, ichchha } from "../../constants/data.js";

const AboutHome = () => {
  return (
    <>
      <section className="about bg-bg-gold-light">
        <div className="container mx-auto">
          {aboutContents.map((content) => (
            <div key={content.id} className="flexCenter flex-col w-3/4 mx-auto">
              {/* <h2>{content.title}</h2> */}
              <h3 className="text-navy font-medium">{content.subtitle}</h3>
              <h4 className="text-center">{content.subheading}</h4>
              <p className="text-lg text-center">{content.description}</p>

            </div>
          ))}

          <div className="video mt-28">
            <video
              width="100%"
              height="100%"
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
            {/* <img src={ichchha} alt="" className="w-full h-screen object-cover" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
