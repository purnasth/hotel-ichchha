import React from "react";
import { useParams } from "react-router-dom";
import { accomodationContents } from "../constants/data.js";
import NotFound from "./ui/NotFound";
import HeroSliderCarousel from "./HeroSliderCarousel";
import PackageComponent from "./Rooms/PackageComponent";

const AccommodationDynamic = () => {
  const { category } = useParams();
  const accomodationData = accomodationContents[0];
  const room = accomodationData.accomodation.find(
    (room) => room.category === category
  );

  if (!room) {
    return <NotFound />;
  }

  return (
    <>
      <HeroSliderCarousel
        images={room.images}
        className="w-full h-96 md:h-screen object-cover"
      />
      <PackageComponent room={room} />
    </>
  );
};

export default AccommodationDynamic;
