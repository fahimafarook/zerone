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

  const fetchAddressFromCoordinates = async () => {
    try {
      setLatitude(12.9417913)
      setLongitude(80.2334273)
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=12.9417913,80.2334273&key=AIzaSyAjglQIm1LV4-f1709X-T-mMUi0V_1TOkA`
      );

      if (!response.ok) {
        throw new Error('Unable to fetch address data.');
      }


      const data = await response.json();
      // console.log(data.results)
      const formattedAddress = data.results[0]?.formatted_address || 'Address not found';
      setAddress(formattedAddress);
    } catch (error) {
      setAddress('Error fetching address');
      console.error('Error fetching address:', error);
    }
  };

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
}

export default LocationComponent;
