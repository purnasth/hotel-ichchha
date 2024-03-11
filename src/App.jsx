import React from "react";
import Navbar from "./components/Navbar";
// About
import { aboutContents, introVideo, ichchha } from "./constants/data";

const App = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen" style={{
        backgroundImage: `url(${ichchha})`,
      }}>

        <Navbar />
      </div>


      <section className="about">
        <div className="container mx-auto">
          {aboutContents.map((content) => (
            <div key={content.id} className="flexCenter flex-col w-3/4 mx-auto">
              <h2>{content.title}</h2>
              <h4>{content.subtitle}</h4>
              <p className="text-xl text-center">{content.description}</p>
            </div>
          ))}

          <div className="video mt-28">
            <video width="100%" height="100%" autoPlay loop muted playsInline id="backgroundVideo" poster={ichchha}>
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

export default App;
