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
