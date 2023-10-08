import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  // Your Google Maps API key
  const apiKey = "AIzaSyAjglQIm1LV4-f1709X-T-mMUi0V_1TOkA";

  // Options for the Google Map
  const mapOptions = {
    center: { lat: 12.9417913, lng: 80.2334273 },
    zoom: 10, // Adjust the zoom level as needed
  };

  // Array of marker positions
  const markerPositions = [
    { lat: 12.9417913, lng: 80.2334273 },
    { lat: 12.942, lng: 80.234 },
    { lat: 12.943, lng: 80.235 },
    // Add more coordinates as needed
  ];

  // Load the Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={mapOptions.center}
      zoom={mapOptions.zoom}
    >
      {/* Add markers to the map */}
      {markerPositions.map((position, index) => (
        <Marker
          key={index}
          position={position}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
