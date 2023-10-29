import React, { useState, useEffect } from 'react';
// import useLocationCoordinates from '../utils/locationCoordinates';
// import useGeoLocation from '../utils/geoLocation';
import '../css/common.css';
import locationPin from "../css/images/location_pin.png"

function Form() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [coords, setCoords] = useState([]);
    const [showToast, setShowToast] = useState('hidden');

    const fillLocation = () => {
        getLocationCoordinates();
    }

    useEffect(() => {
        if(coords[0] !== undefined)
            getGeoLocation(coords[0], coords[1]);
    }, [coords])

    function getGeoLocation(latitude, longitude) {
        const apiUrl = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
        let address = ""
        fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Sorry, couldn't fetch address for given location");
          }
          return response.json();
        })
        .then((data) => {
          const display_address = data.display_name;
          setAddress(formatAddress(display_address));
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        return address;
    }

    function getLocationCoordinates() {
      setShowToast('visible');
      const navigatorConfig = {
        enableHighAccuracy: true,
        timeout: 10000,
      };
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCoords([latitude, longitude]);
          }, 
          (error) => {
            if (error.code === error.PERMISSION_DENIED) {
              console.error("Geolocation access denied by the user.");
            } else if (error.code === error.POSITION_UNAVAILABLE) {
              console.error("Location information is unavailable.");
            } else if (error.code === error.TIMEOUT) {
              console.error("The request to get user location timed out.");
            } else {
              console.error("An unknown error occurred.");
            }
          },
          navigatorConfig);
      } else {
        console.error("Geolocation is not supported by your browser");
      }
      setShowToast('hidden');
    }

    function formatAddress(address) {
      return address.replace(",", ",\n").concat(`.\n\nLatitude: ${coords[0]}, Longitude: ${coords[1]}`)
    }
      

    return (
        <div id='enquirePage' className='contact-form container-fluid'>
            <div className = 'form-section container row'>
                <h3 className = 'form-title'>Reach us</h3>
                <form className = 'form-area col-12 col-md-9' action='https://getform.io/f/7d564b4e-2ffe-454b-bfe9-f269594d1cd9' method='POST'>
                    <div className="inputBx row justify-content-start">
                        <span className='form-span col-4 col-md-3'>name</span>
                        <input className = "form-fields col-6" type="text" name='Name' value={name} onChange={(e) => {setName(e.target.value);}} required/> 
                    </div>
                    <div className="inputBx row justify-content-start">
                        <span className='form-span col-4 col-md-3'>Phone</span>
                        <input className = "form-fields col-6" type="text" name='Phone' value={phone} onChange={(e) => {setPhone(e.target.value);}} required/> 
                    </div>
                    <div className="inputBx row justify-content-start">
                        <span className='form-span col-4 col-md-3'>Email</span>
                        <input className = "form-fields col-6" type="text" name='Email' value={email} onChange={(e) => {setEmail(e.target.value);}} /> 
                    </div>
                    <div className="inputBx row justify-content-start">
                        <span className='form-span col-4 col-md-3'>Plan</span>
                        <select className="form-fields col-6" name='Plan' value={plan} onChange={(e) => {setPlan(e.target.value);}} >
                            <option value="499">₹ 499 - 50 Mbps</option>
                            <option value="599">₹ 599 - 60 Mbps</option>
                            <option value="699">₹ 699 - 100 Mbps</option>
                            <option value="799">₹ 799 - 150 Mbps</option>
                            <option value="999">₹ 999 - 200 Mbps</option>
                            <option value="1499">₹ 1,499 - 250 Mbps</option>
                            <option value="1999">₹ 1,999 - 300 Mbps</option>
                        </select>
                    </div>
                    <input type='hidden' name='latitude' value={coords[0]} />
                    <input type='hidden' name='longitude' value={coords[1]} />
                    <input type='hidden' name='map' value={`https://www.google.com/maps/search/${coords[0]},${coords[1]}/@${coords[0]},${coords[1]},15z?entry=ttu`} />
                    <div className="inputBx row justify-content-start">
                        <span className='form-span col-4 col-md-3'>Address</span>
                        <textarea className = "form-fields address-field col-6" type="text" name='Address' value={address} onChange={(e) => {setAddress(e.target.value);}} />
                        <div className = 'btn-locate-me col-2 col-md-2' onClick={fillLocation}>
                          <img src={locationPin} className='img-fluid'/>
                          <br/>
                          Locate Me
                        </div>
                    </div>
                    <div className="inputBx row justify-content-start">
                        <span className='form-span comment-field col-4 col-md-3'>Comments</span>
                        <textarea className = "form-fields col-8" type="text" name='Comment' value={comment} onChange={(e) => {setComment(e.target.value);}} /> 
                    </div>
                    <button className = 'btn-enquire' type="submit" value="Enquire Now">Enquire now</button>
                </form>
            </div>
            <div className='location-fetch-toast' style={{visibility:`${showToast}`}}>
              Fetching your location...
            </div>
        </div>
    );
}

export default Form;
