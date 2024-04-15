import React from "react";
import { accomodationContents } from "../../constants/data.js";
import HeroSliderCarousel from "../HeroSliderCarousel";
import PackageComponent from "./PackageComponent";

const SuperDeluxeRoom = () => {
  const accomodationData = accomodationContents[0];
  const superDeluxeRoom = accomodationData.accomodation.find(
    (room) => room.id === "superDeluxeRoom"
  );

  return (
    <>
      <HeroSliderCarousel
        images={superDeluxeRoom.images}
        className="w-screen h-screen object-cover"
      />

      <PackageComponent room={superDeluxeRoom} />
    </>
  );
};

export default SuperDeluxeRoom;
