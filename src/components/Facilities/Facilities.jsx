import React from "react";
import { hotelFacilities } from "../../constants/data.js";

const Facilities = () => {
  return (
    <section id="facilities" className="bg-bg-gold-light">
      <div className="container mx-auto">
        <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
          <h3 className="text-navy font-medium">Lorem ipsum dolor sit amet.</h3>
          <h4 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            laudantium aperiam incidunt excepturi, architecto rerum quasi.
          </h4>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dolor ratione iusto laudantium culpa eveniet blanditiis illo vitae
            veritatis unde velit magnam ipsum, minus illum rerum, voluptatibus
            corporis deleniti magni libero architecto, fuga est modi? Tempora
            quia cumque officia fuga mollitia libero eligendi non impedit quos,
            praesentium delectus veniam magni molestias repudiandae vitae
            laboriosam fugit saepe velit in, enim hic facilis numquam corrupti
            soluta? Alias omnis corrupti ut, ea magnam odio error, eos tempora
            fugiat nulla, aliquam unde voluptas voluptate?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-28">
        {hotelFacilities.map((facility) => (
          <div
            key={facility.id}
            className="relative overflow-hidden group"
            style={{ perspective: "1000px" }}
          >
            <img
              src={facility.icon}
              alt={facility.title}
              className="w-full h-[90vh] shadow-md transition duration-700 ease-in-out transform group-hover:scale-150"
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] w-full h-full"></div>
            <div
              className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-ivory text-center transition-all duration-700 ease-in-out transform translate-y-[50vh] group-hover:translate-y-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-4">
                <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {facility.title}
                </h3>
                <p className="text-ivory my-4">{facility.description}</p>
                <button className="text-ivory bg-transparent border border-solid border-ivory px-4 py-2 mt-2 hover:bg-ivory hover:text-navy transition duration-300 ease-in-out">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
