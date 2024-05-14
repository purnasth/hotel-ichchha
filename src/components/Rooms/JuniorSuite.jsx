import React from "react";
import { accomodationContents } from "../../constants/data.js";
import HeroSliderCarousel from "../HeroSliderCarousel";
import PackageComponent from "./PackageComponent";

const JuniorSuite = () => {
  const accomodationData = accomodationContents[0];
  const juniorSuite = accomodationData.accomodation.find(
    (room) => room.id === "juniorSuite"
  );

  return (
    <>
      <HeroSliderCarousel
        images={juniorSuite.images}
        className="w-full h-96 md:h-screen object-cover"
      />

      <PackageComponent room={juniorSuite} />
    </>
  );
};

export default JuniorSuite;
