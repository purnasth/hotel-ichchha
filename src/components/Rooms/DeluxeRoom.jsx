import React from "react";
import { accomodationContents } from "../../constants/data.js";
import HeroSliderCarousel from "../HeroSliderCarousel";
import PackageComponent from "./PackageComponent";

const DeluxeRoom = () => {
  const accomodationData = accomodationContents[0];
  const deluxeRoom = accomodationData.accomodation.find(
    (room) => room.id === "deluxeRoom"
  );

  return (
    <>
      <HeroSliderCarousel
        images={deluxeRoom.images}
        className="w-screen h-screen object-cover"
      />

      <PackageComponent room={deluxeRoom} />
    </>
  );
};

export default DeluxeRoom;
