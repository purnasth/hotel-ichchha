import React from "react";
import { accomodationContents } from "../../constants/data.js";
import HeroSliderCarousel from "../HeroSliderCarousel";
import PackageComponent from "./PackageComponent";

const PremiumRoom = () => {
  const accomodationData = accomodationContents[0];
  const premiumRoom = accomodationData.accomodation.find(
    (room) => room.id === "premiumRoom"
  );

  return (
    <>
      <HeroSliderCarousel
        images={premiumRoom.images}
        className="w-full h-96 md:h-screen object-cover"
      />

      <PackageComponent room={premiumRoom} />
    </>
  );
};

export default PremiumRoom;
