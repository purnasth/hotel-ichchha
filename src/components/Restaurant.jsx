import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { diningOptions } from "../constants/data";
import ReusableSlider from "./ReusableSlider";

const Restaurant = () => {
  return (
    <>
      <Navbar />
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">
              Happy hour is the best hour
            </h3>
            <h4 className="text-3xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              omnis.
            </h4>
            <p className="text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              rerum minus sequi, quae ullam vero dignissimos, quisquam numquam
              commodi expedita esse adipisci animi impedit magni! Obcaecati, quo
              nostrum nihil minima nemo vero sit debitis quis optio, sint, sed
              voluptas officia?
            </p>
          </div>

          <div className="flex items-center justify-center flex-col mt-32 max-w-5xl mx-auto">
            {Object.values(diningOptions).map((option) => (
              <div className="w-full py-8" key={option.id}>
                {/* <img
                  src={option.imageUrl}
                  alt={option.title}
                  className="w-full h-[600px] object-cover"
                /> */}
                <ReusableSlider
                  images={option.imageUrls}
                  alt={option.title}
                  className="w-full h-[600px] object-cover"
                />
                <div className="my-8 flex justify-center gap-5 flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <h4>{option.title}</h4>
                    {/* <div className="button flex items-center justify-center gap-4">
                      <button className="bg-gold text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear">
                        Prev
                      </button>
                      <button className="bg-gold text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear">
                        Next
                      </button>
                    </div> */}
                    <a
                      href=""
                      className="bg-navy text-gold hover:text-navy hover:bg-gradient px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                    >
                      View Menu
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    {/* <p>{option.subtitle}</p> */}
                    {/* <p>{option.description}</p> */}
                    <p>Occupancy: {option.occupancy}</p>
                    <p>Opening Time: {option.openingTime}</p>
                    <p>Closing Time: {option.closingTime}</p>

                    {/* <p>Food Menu: {option.foodMenu}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Restaurant;
