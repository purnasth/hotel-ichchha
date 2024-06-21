import React from "react";

const BODTeam = ({ ourTeamMembers }) => {
  const chairman = ourTeamMembers.find(
    (member) => member.position === "Chairman"
  );
  const directors = ourTeamMembers.filter(
    (member) => member.position === "Director"
  );
  const ceo = ourTeamMembers.find((member) => member.position === "CEO");

  return (
    <section className="bg-bg-gold-light">
      <div className="flexCenter flex-col w-3/4 mx-auto">
        <h3 className="text-navy font-medium">
          Get to Know the Faces Behind Our Success
        </h3>
        <h4 className="text-base text-center">
          Unveil the Talented Individuals Who Embark on a Collective Mission to
          Elevate Your Experience at Hotel Ichchha
        </h4>
      </div>
      <div className="mt-32 flex flex-col gap-16 items-center">
        <div className="group overflow-hidden relative size-80 text-center text-white shadow-lg transition-all duration-300 ease-linear">
          <img
            src={chairman.image}
            alt={chairman.name}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] size-full "></div>
          <div className="absolute -translate-y-20 group-hover:-translate-y-52 transition-all duration-300 ease-linear">
            <h4 className="font-body text-2xl font-medium">{chairman.name}</h4>
            <h5 className="font-body text-2xl mb-6">{chairman.position}</h5>
            <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
              {chairman.description}
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-16">
          {directors.map((director) => (
            <div key={director.id} className="flex flex-col items-center">
              <div className="group overflow-hidden relative size-80 text-center text-white shadow-lg transition-all duration-300 ease-linear">
                <img
                  src={director.image}
                  alt={director.name}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] size-full "></div>
                <div className="absolute -translate-y-20 group-hover:-translate-y-52 transition-all duration-300 ease-linear">
                  <h4 className="font-body text-2xl font-medium">
                    {director.name}
                  </h4>
                  <h5 className="font-body text-2xl mb-6">
                    {director.position}
                  </h5>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                    {director.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="group overflow-hidden relative size-80 text-center text-white shadow-lg transition-all duration-300 ease-linear">
          <img
            src={ceo.image}
            alt={ceo.name}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] size-full "></div>
          <div className="absolute -translate-y-20 group-hover:-translate-y-52 transition-all duration-300 ease-linear">
            <h4 className="font-body text-2xl font-medium">{ceo.name}</h4>
            <h5 className="font-body text-2xl mb-6">{ceo.position}</h5>
            <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
              {ceo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BODTeam;
