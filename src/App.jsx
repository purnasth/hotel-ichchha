import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="" style={{
        backgroundImage: `url('https://www.hotelichchha.com/images/slideshow/PJGhZ-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh"
      }}>

        <Navbar />
      </div>
    </>
  );
};

export default App;
