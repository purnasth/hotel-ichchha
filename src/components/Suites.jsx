import React from "react";
import Navbar from "./Navbar";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../constants/data.js";

const Suites = () => {
  const accomodationData = accomodationContents[0];

  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container mx-auto">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">{accomodationData.title}</h3>
            <h4 className="text-3xl text-center">
              {accomodationData.subheading}
            </h4>
            <p className="text-base text-center">
              {accomodationData.description}
            </p>
          </div>

          <section className="mt-8">
            <div className="border-2 border-navy/40 rounded-3xl overflow-hidden">
              {accomodationData.accomodation.map((suite) => (
                <div
                  key={suite.id}
                  className="border-b-2 border-navy/40 flex items-center justify-between gap-0 bg-gradient"
                >
                  <div className="flex w-1/3">
                    <img
                      src={suite.url}
                      alt={suite.title}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between px-12 w-2/3 gap-10">
                    <div className="flex items-start flex-col gap-5">
                      <h4 className="">{suite.title}</h4>
                      <p className="text-base max-w-md">{suite.description}</p>
                    </div>
                    <div className="flex">
                      <a
                        href={suite.router}
                        className="bg-navy text-gold hover:text-ivory hover:bg-bg-gold-dark px-4 py-1 rounded-full text-2xl transition-all duration-300 ease-linear"
                      >
                        <HiArrowLongRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Suites;
