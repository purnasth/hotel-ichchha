import React from "react";
import Navbar from "./Navbar";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../constants/data.js";
import Footer from "./Footer.jsx";

const Suites = () => {
  const accomodationData = accomodationContents[0];
  const duration = "700";

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

          <div className="mt-32">
            <div className="border-[1px] border-navy/40 rounded-3xl overflow-hidden">
              {accomodationData.accomodation.map((suite) => (
                <a
                  href={suite.router}
                  key={suite.id}
                  className={`border-b-[1px] border-navy/30 flex items-center justify-between gap-0 bg-bg-gold-dark hover:bg-goldLight/80 group transition-all duration-${duration}`}
                >
                  <div className="flex w-1/3">
                    <img
                      src={suite.url}
                      alt={suite.title}
                      className={`w-full h-60 object-cover origin-left transition-all duration-${duration} group-hover:scale-x-105`}
                    />
                  </div>
                  <div
                    className={`flex items-center justify-between px-12 w-2/3 gap-10 transition-all duration-${duration} group-hover:translate-x-4`}
                  >
                    <div className="flex items-start flex-col gap-5">
                      <h4 className="">{suite.title}</h4>
                      <p className="text-base max-w-md">{suite.description}</p>
                    </div>
                    <div
                      className={`flex transition-all duration-${duration} group-hover:translate-x-4`}
                    >
                      <button
                        href={suite.router}
                        className={`bg-goldLight text-navy group-hover:text-ivory group-hover:bg-navy px-4 py-1 rounded-full text-2xl transition-all duration-${duration} ease-linear`}
                      >
                        <HiArrowLongRight />
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Suites;
