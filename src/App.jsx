import React from "react";
import Navbar from "./components/Navbar";
import { ichchha } from "./constants/data";
import AboutHome from "./components/About/AboutHome";
import Accomodation from "./components/Rooms/Accomodation";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${ichchha})`,
        }}
      >
        <Navbar />
      </div>

      <AboutHome />
      <Accomodation />
      <Testimonials />
    </>
  );
};

export default App;
