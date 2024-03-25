import React, { useState, useEffect } from "react";
import NearbyMapComponent from "./Nearby/NearbyMapComponent";

function NearbyLocations() {
  return (
    <section className="bg-bg-gold-light">
      <div>
        <div className="container mx-auto">
          <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
            <h3 className="text-navy font-medium">
              Iconic attraction near Hotel Ichchha
            </h3>
            <h4 className="text-center">
              Hotel Ichchha is a verdant oasis in the heart of Simara and is
              perfect for scintillating experiences. Visit the iconic landmarks
              and monuments near our hotel and create your own moments.
            </h4>
          </div>
        </div>

        <NearbyMapComponent />
      </div>
    </section>
  );
}

export default NearbyLocations;
