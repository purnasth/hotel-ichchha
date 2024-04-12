import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutHome from "./components/About/AboutHome";
import Accomodation from "./components/Rooms/Accomodation";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import NearbyLocations from "./components/Nearby";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Suites from "./components/Suites";
// import Hero from "./components/Hero";
import DeluxeRoom from "./components/Rooms/DeluxeRoom";
import SuperDeluxeRoom from "./components/Rooms/SuperDeluxeRoom";
import Restaurant from "./components/Restaurant";
import EventsHall from "./components/EventsHall";
import Contact from "./components/Contact";
import IchchhaFacilities from "./components/IchchhaFacilities";
import Recreation from "./components/Recreation";
import BackToTop from "./components/BackToTop";
import ExploreFacilitiesButton from "./components/Facilities/ExploreFacilitiesButton";
import PremiumRoom from "./components/Rooms/PremiumRoom";
import JuniorSuite from "./components/Rooms/JuniorSuite";
// import Lenis from "@studio-freight/lenis";

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   // lenis.on("scroll", (e) => {
  //   //   console.log(e);
  //   // });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     // Cleanup if needed
  //   };
  // }, []);

  return (
    <Router>
      <>
        <Navbar />

        {/* <Hero /> */}

        <div className="lf-in">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Suites />} />
            <Route path="/accommodation/deluxe" element={<DeluxeRoom />} />
            <Route
              path="/accommodation/super-deluxe"
              element={<SuperDeluxeRoom />}
            />
            <Route path="/accommodation/premium" element={<PremiumRoom />} />
            <Route
              path="/accommodation/junior-suite"
              element={<JuniorSuite />}
            />
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/events" element={<EventsHall />} />
            <Route path="/facilities" element={<IchchhaFacilities />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/nearby" element={<NearbyLocations />} />
            <Route path="/recreation" element={<Recreation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <BackToTop />
        <ExploreFacilitiesButton />
      </>
    </Router>
  );
};

export default App;
