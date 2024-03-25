import React from "react";
import { FaWifi, FaSwimmingPool, FaUtensils, FaSpa } from "react-icons/fa";
import { GiGymBag, GiCocktail } from "react-icons/gi";

const FacilitiesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <FacilityCard icon={<FaWifi />} title="Free Wi-Fi" />
          <FacilityCard icon={<FaSwimmingPool />} title="Swimming Pool" />
          <FacilityCard icon={<FaUtensils />} title="Fine Dining" />
          <FacilityCard icon={<FaSpa />} title="Spa & Wellness" />
          <FacilityCard icon={<GiGymBag />} title="Fitness Center" />
          <FacilityCard icon={<GiCocktail />} title="Bar & Lounge" />
        </div>
      </div>
    </section>
  );
};

const FacilityCard = ({ icon, title }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <div className="mr-4 text-blue-500">{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default FacilitiesSection;
