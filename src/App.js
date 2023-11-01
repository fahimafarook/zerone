import './App.css';
import React, { useState, useEffect } from 'react';
import LandingPage from './component/LandingPage.js'
import PricingPage from './component/PricingPage.js'
import Aboutus from './component/Aboutus';
import Form from './component/Form';
// import LocationComponent from './component/LocationComponent'
// import MapComponent from './component/MapComponent'
// import OpenLayersMap from './component/Map';
// import LeafMap from './component/LeafMap';
// import ReverseGeocoding from './component/ReverseGeocoding';
import FooterComponent from './component/footer';

export const DeviceContext = React.createContext();

function App() {
  const [screenName, setScreenName] = useState('phone');

  const resizeHandler = () => {
    if (window.innerWidth < 768){
      setScreenName(prev => "phone");
      console.log("setting size :: phone")
    }
    else if (window.innerWidth >= 768 && window.innerWidth < 1200){
      setScreenName(prev => "tab");
      console.log("setting size :: tab")
    }
    else if (window.innerWidth >= 1200){
      setScreenName(prev => "laptop");
      console.log("setting size :: lap")
    }
  }

  useEffect(() => {
    resizeHandler();
    document.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="App">
      <DeviceContext.Provider value={screenName}>
        <LandingPage/>
        <Aboutus/>
        <PricingPage/>
        <Form></Form>
        {/* <LocationComponent/> */}
        {/* <MapComponent/> */}
        {/* <OpenLayersMap /> */}
        {/* <LeafMap /> */}
        {/* <ReverseGeocoding/> */}
        <FooterComponent />
      </DeviceContext.Provider>
    </div>
  );
}

export default App;
