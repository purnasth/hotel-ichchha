import React, { useState, useEffect } from "react";
import { nearbyLocations } from "../../constants/data";

function NearbyMapComponent() {
  const [isMapOpen, setIsMapOpen] = useState(true); // Initially true to show the map
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || ""); // Default to the map of the first location
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  ); // Default to the first location

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
  };

  const closeMapModal = () => {
    setIsMapOpen(false);
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    openMapModal(location.map, location);
  };

  useEffect(() => {
    // Update map URL when selected location changes
    if (selectedLocation) {
      setMapUrl(selectedLocation.map);
    }
  }, [selectedLocation]);

  const totalLocations = nearbyLocations.length;
  const halfLocations = Math.ceil(totalLocations / 2);

  const leftLocations = nearbyLocations.slice(0, halfLocations);
  const rightLocations = nearbyLocations.slice(halfLocations);

  return (
    <div className="flex justify-between items-center mt-20">
      <div className="w-1/5">
        <ul>
          {leftLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-left"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <a
                href="#"
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5 p-8">
        {/* Embedded Google Map */}
        {isMapOpen && (
          <div className="relative bg-ivory w-full rounded-lg">
            {/* <span
                  className="absolute top-0 right-0 m-4 text-2xl cursor-pointer"
                  onClick={closeMapModal}
                >
                  &times;
                </span> */}
            <iframe
              title="Map"
              src={mapUrl}
              className="w-full h-[60vh] rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
      <div className="w-1/5">
        <ul>
          {rightLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer text-right"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <a
                href="#"
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
              >
                Get Direction
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NearbyMapComponent;
