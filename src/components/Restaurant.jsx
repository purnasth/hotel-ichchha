import React from "react";
import { diningOptions } from "../constants/data";
import ReusableSlider from "./ReusableSlider";

const Restaurant = () => {
  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="flexCenter flex-col w-3/4 mx-auto">
            <h3 className="text-navy font-medium">
              Happy hour is the best hour
            </h3>
            <h4 className="text-3xl text-center">
              Where Every Bite is Bliss, and Every Sip, an Experience!
            </h4>
            <p className="text-base text-center">
              Step into Hotel Ichchha, where culinary artistry meets urban chic.
              Relish innovative dishes and artisanal drinks in our restaurant
              and bar. Enjoy impeccable service, intimate spaces, and a vibrant
              atmosphere. Perfect for food connoisseurs and social butterflies
              alike. Discover your next favorite spot in the heart of the city.
            </p>
          </div>

          <div className="flex items-center justify-center flex-col mt-20 max-w-5xl mx-auto">
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
                      className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                    >
                      View Menu
                    </a>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    {/* <p>{option.subtitle}</p> */}
                    {/* <p>{option.description}</p> */}
                    <p>Occupancy: {option.occupancy}</p>
                    <p>Opening Time: {option.openingTime} - {option.closingTime}</p>
                    {/* <p>Opening Time: 06:00 AM - 11:00 PM</p> */}
                    <p>Type: {option.type}</p>

                    {/* <p>Food Menu: {option.foodMenu}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
