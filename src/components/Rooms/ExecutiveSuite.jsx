import React from "react";
import { accomodationContents } from "../../constants/data.js";
import HeroSliderCarousel from "../HeroSliderCarousel";
import PackageComponent from "./PackageComponent";

const ExecutiveSuite = () => {
  const accomodationData = accomodationContents[0];
  const executiveSuite = accomodationData.accomodation.find(
    (room) => room.id === "executiveSuite"
  );

  return (
    <>
      <HeroSliderCarousel
        images={executiveSuite.images}
        className="w-screen h-screen object-cover"
      />

      <PackageComponent room={executiveSuite} />
    </>
  );
};

export default ExecutiveSuite;
