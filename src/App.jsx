import React from "react";
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
import Facilities from "./components/Facilities/Facilities";
import Gallery from "./components/Gallery/Gallery";
import NearbyLocations from "./components/Nearby";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Suites from "./components/Suites";
// import Hero from "./components/Hero";
import DeluxeRoom from "./components/Rooms/DeluxeRoom";

const App = () => {
  return (
    <Router>
      <>
        {/* <div
          className="bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${ichchha})`,
          }}
        > */}
        {/* <Navbar /> */}
        {/* </div> */}

        {/* <Hero /> */}

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Suites />} />
          <Route path="/accommodation/deluxe" element={<DeluxeRoom />} />
          {/* <Route
            path="/accommodation/super-deluxe"
            element={<SuperDeluxeRoom />}
          /> */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/nearby" element={<NearbyLocations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
