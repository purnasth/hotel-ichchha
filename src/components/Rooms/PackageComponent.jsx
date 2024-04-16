import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../../constants/data.js";
import RoomDetailsWithBooking from "./RoomDetailsWithBooking";

const PackageComponent = ({ room }) => {
  return (
    <section className="bg-bg-gold-light">
      <div className="container mb-24">
        <div className="flexCenter flex-col w-3/4 mx-auto mb-32">
          <h3 className="text-navy font-medium">{room.title}</h3>
          <h4 className="text-3xl text-center">{room.subtitle}</h4>
          <p className="text-base text-center">{room.description}</p>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2 max-w-lg">
            <h5 className="text-3xl leading-loose pb-4">
              {room.overview[0].title}
            </h5>
            <p className="pb-4">{room.overview[0].content}</p>

            {room.policies.map((policyCategory) => (
              <div key={policyCategory.title}>
                <h5 className="text-3xl leading-loose py-4">
                  {policyCategory.title}
                </h5>
                <ul className="list-decimal ml-4">
                  {policyCategory.content.map((policy) => (
                    <li key={policy} className="mb-2">
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h5 className="text-3xl leading-loose py-6">Room Amenities</h5>
            <div className="flex items-start gap-20">
              <ul className="flex items-start justify-center flex-col gap-5">
                {room.amenities
                  .slice(0, Math.ceil(room.amenities.length / 2))
                  .map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4">
                      <HiArrowLongRight />
                      {amenity}
                    </li>
                  ))}
              </ul>
              <ul className="flex items-start justify-center flex-col gap-5">
                {room.amenities
                  .slice(Math.ceil(room.amenities.length / 2))
                  .map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4">
                      <HiArrowLongRight />
                      {amenity}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <RoomDetailsWithBooking
            roomDetails={room.roomDetails}
            rojaiLink={accomodationContents[0].rojaiLink}
          />
        </div>
      </div>
    </section>
  );
};

export default PackageComponent;
