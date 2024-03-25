import React from "react";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { facilitiesSectionIcon } from "../../constants/data.js";

const FacilitiesSection = () => {
  return (
    <>
      <section className="bg-bg-gold-dark">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
            <h3 className="text-navy font-medium">
              Lorem ipsum dolor sit amet.
            </h3>
            <h4 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate velit voluptas odit esse cumque doloremque quod.
            </h4>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              obcaecati maxime corrupti velit cum accusamus officia dignissimos
              perferendis, numquam quo, laudantium ducimus distinctio, delectus
              fugiat culpa animi magnam sint ipsa tempora quas repudiandae!
              Sequi velit ea corrupti facilis minus a praesentium totam, tenetur
              repellat eos maxime, deleniti qui tempore ullam!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24">
            {Object.values(facilitiesSectionIcon).map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-ivory p-4 rounded-md shadow-md"
              >
                {/* <img
                  src={facility.icon}
                  alt={facility.title}
                  className="w-12 h-12 mb-2"
                /> */}
                <MdOutlineInsertEmoticon className="w-12 h-12 mb-2" />
                <h3 className="text-lg font-semibold">{facility.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilitiesSection;
