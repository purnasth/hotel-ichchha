import React from "react";
import { accomodationContents } from "../../constants/data.js";
import { HiArrowLongRight } from "react-icons/hi2";
import HeroSliderCarousel from "../HeroSliderCarousel.jsx";

const PremiumRoom = () => {
  const accomodationData = accomodationContents[0];
  const premiumRoom = accomodationData.accomodation.find(
    (room) => room.id === "premiumRoom"
  );

  return (
    <>
      <HeroSliderCarousel
        images={premiumRoom.images}
        className="w-screen h-screen object-cover"
      />

      <section className="bg-bg-gold-light">
        <div className="container mb-24">
          <div className="flexCenter flex-col w-3/4 mx-auto mb-32">
            <h3 className="text-navy font-medium">{premiumRoom.title}</h3>
            <h4 className="text-3xl text-center">{premiumRoom.subtitle}</h4>
            <p className="text-base text-center">
              {premiumRoom.description}
            </p>
          </div>

          <div className="flex justify-between">
            <div className="w-1/2 max-w-lg">
              <h5 className="text-3xl leading-loose pb-4">
                {premiumRoom.overview[0].title}
              </h5>
              <p className="pb-4">{premiumRoom.overview[0].content}</p>

              {premiumRoom.policies.map((policyCategory) => (
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
                  {premiumRoom.amenities
                    .slice(0, Math.ceil(premiumRoom.amenities.length / 2))
                    .map((amenity) => (
                      <li key={amenity} className="flex items-center gap-4">
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
                <ul className="flex items-start justify-center flex-col gap-5">
                  {premiumRoom.amenities
                    .slice(Math.ceil(premiumRoom.amenities.length / 2))
                    .map((amenity) => (
                      <li key={amenity} className="flex items-center gap-4">
                        <HiArrowLongRight />
                        {amenity}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="ml-auto w-1/2 h-[80vh] sticky top-6">
              <div className="bg-gold/30 text-xl p-12">
                {Object.entries(premiumRoom.roomDetails).map(
                  ([key, { icon, value }]) => (
                    <div key={key}>
                      <ul className="flex items-center justify-between gap-2 py-8">
                        <li className="flex items-center gap-4">
                          {/* {icon}  */}
                          {/* <img src={icon} alt="Test" className="w-16 h-16 object-contain" /> */}
                          {/* <HiArrowLongRight /> */}

                          {key}
                        </li>
                        <li>{value}</li>
                      </ul>
                      <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />
                    </div>
                  )
                )}

                <div className="pt-12 w-full">
                  <a
                    href="https://www.hotelichchha.com/result.php?hotel_code=8fE7Jg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-navy text-ivory hover:text-navy hover:bg-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
                  >
                    Book Now
                    <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremiumRoom;
