import logo from './logo.svg';
import './App.css';
import LandingPage from './component/LandingPage.js'
import PricingPage from './component/PricingPage.js'
import Aboutus from './component/Aboutus';
import Form from './component/Form';
import LocationComponent from './component/LocationComponent'
import MapComponent from './component/MapComponent'

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <Aboutus/>
      <PricingPage/>
      {/* <Form></Form> */}
      {/* <LocationComponent/> */}
      <MapComponent/>
    </div>
  );
}

export default App;
