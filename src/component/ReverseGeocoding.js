import React, { useEffect, useState } from 'react';

function ReverseGeocoding() {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    // Replace this URL with the correct reverse geocoding API URL
    const apiUrl = 'https://geocode.maps.co/reverse?lat=11.2359071&lon=78.8386118';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Assuming the API response contains the address information
        console.log(data);
        const formattedAddress = data.address; // Replace with the correct JSON field
        console.log(typeof(formattedAddress));
        console.log("aaa");
        for (const property in formattedAddress) {
          if (Object.prototype.hasOwnProperty.call(formattedAddress, property)) {
            const value = formattedAddress[property];
            console.log(property, value);
          }
        }
        console.log("aaa");
        setAddress(formattedAddress);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>Reverse Geocoded Address:</p>
      <p>{address}</p>
    </div>
  );
}

export default ReverseGeocoding;
