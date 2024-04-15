import React from "react";
import AboutHome from "./About/AboutHome";
import { messageFromChairman, ourTeamMembers } from "../constants/data";

const About = () => {
  return (
    <>
      <AboutHome />

      <section className="bg-bg-gold-dark">
        {messageFromChairman.map((message) => (
          <div
            key={message.id}
            className="flexCenter flex-col w-full md:w-3/4 mx-auto"
          >
            <h3 className="text-4xl font-medium text-center">
              {message.title}
            </h3>
            <h4 className="text-2xl text-center mb-20">{message.subheading}</h4>

            <div className="flex align-center justify-between gap-12 my-8">
              <div className="flex items-start flex-col gap-0 max-h-[400px] sticky top-6">
                <div className="w-72 h-80 rounded-md overflow-hidden">
                  <img
                    src={message.image}
                    alt="Ichchha Hotel"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h2 className="text-2xl font-medium mt-8">
                  {message.fullName}
                </h2>
                <span>{message.position}</span>
              </div>
              <div className="flex items-start flex-col gap-4 justify-center">
                <p className="text-lg text-justify">{message.description}</p>
                <p className="text-lg text-justify">
                  We are a 5-Star Deluxe Hotel; nevertheless, we have all the
                  facilities as well as the infrastructure as that of a 5-Star
                  property and we are aiming for the same so as to fulfill the
                  need of high-end clients in this region. Meanwhile, we have
                  expanded our wing at Amlekhgunj as Garden Safari Resort which
                  is under construction and at the completion phase, located
                  just next to the entrance of Parsa National Park.
                </p>
                <p className="text-lg text-justify">
                  Since this area has already been developed as an industrial
                  area having Birgunj-Pathlaiya Industrial Corridor already in
                  place, new developments have been going on such as domestic as
                  well as Indian/foreign tourism, agro tourism, infrastructure
                  projects run by the government like Nijgadh-Kathmandu
                  Expressway connecting the whole Terai Region to the Capital
                  city of Nepal in just a little over 1-hour drive and Nijgadh
                  International Airport, all favoring rapid growth of tourism in
                  this part of the country.
                </p>
                <p className="text-lg text-justify">
                  We believe that these enterprises will provide opportunities
                  for future sustainable growth in tourism and travel trade
                  industry of Nepal. We also recognize and embrace our
                  obligation to become good corporate citizens. We are highly
                  dedicated to maintain corporate transparency and act ethically
                  in all aspects of our business. We will play whatever role
                  possible to make the world a better place to live. We will do
                  all that we can to provide good services to our valued
                  customers.
                </p>
              </div>
            </div>

            {/* <div className="venture mt-16">
              <h3 className="text-4xl font-medium py-8">Associated Venture:</h3>
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                {message.associatedVentures.map((venture) => (
                  <div
                    key={venture.id}
                    className="bg-ivory p-6 rounded-lg shadow-md"
                  >
                    <img
                      // src={venture.logo}
                      src={logo}
                      alt={venture.logo}
                      className="w-24 mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold">{venture.title}</h4>
                    <h5 className="text-lg">- {venture.post}</h5>
                    <a
                      href={venture.url}
                      className="block text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        ))}
      </section>
      {/* <section className="bg-bg-gold-light">
        <div className="flexCenter flex-col w-3/4 mx-auto">
          <h3 className="text-navy font-medium">
            Get to Know the Faces Behind Our Success
          </h3>
          <h4 className="text-center">
            Unveil the Talented Individuals Who Embark on a Collective Mission
            to Elevate Your Experience at Hotel Ichchha
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28">
          {ourTeamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden group"
              style={{ perspective: "1000px" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover shadow-md transition duration-500 ease-in-out transform group-hover:scale-125"
              />
              <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] w-full h-full"></div>
              <div
                className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-ivory text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-4">
                  <h3 className="text-3xl font-medium mb-6 group-hover:mb-0 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-ivory my-4">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default About;
