import React, { useState, useEffect } from 'react';

function LocationComponent() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    if(latitude !== null)
      getGeoLocation();
  }, [latitude, longitude]);


  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const handleError = (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      setError("Geolocation access denied by the user.");
    } else if (error.code === error.POSITION_UNAVAILABLE) {
      setError("Location information is unavailable.");
    } else if (error.code === error.TIMEOUT) {
      setError("The request to get user location timed out.");
    } else {
      setError("An unknown error occurred.");
    }
  };

  function getGeoLocation() {
    console.log(latitude, longitude);
    const apiUrl = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
    fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const formattedAddress = data.address; // Replace with the correct JSON field
      console.log(formattedAddress);
      setAddress(formattedAddress);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }



  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          {/* <p>Address: {address}</p> */}
        </div>
      )}
    </div>
  );
}

export default LocationComponent;

