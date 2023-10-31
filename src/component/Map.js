import React, { useEffect } from 'react';
// import 'ol/ol.css'; // Import OpenLayers styles
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import { fromLonLat } from 'ol/proj';
import { toStringHDMS } from 'ol/coordinate'; // To format the coordinate display
import '../App.css'

import Geolocation from 'ol/Geolocation.js';

import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import {Icon, Style} from 'ol/style.js';
import {Modify} from 'ol/interaction.js';
import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';


function OpenLayersMap() {
  useEffect(() => {
    // const map = new Map({
    //   target: 'map',
    //   layers: [
    //     new TileLayer({
    //       source: new OSM(),
    //     }),
    //   ],
    //   view: new View({
    //     center: fromLonLat([0, 0]),
    //     zoom:1,
    //   }),
    // });

    // const markerCoordinates = [90.5, 25.0];
    // const markerCoordinatesInMapProjection = fromLonLat(markerCoordinates);
    // console.log(markerCoordinatesInMapProjection);

    // const markerOverlay = new Overlay({
    //   position: markerCoordinatesInMapProjection,
    //   element: document.getElementById('marker'),
    // });

    // map.addOverlay(markerOverlay);

    // // Create a Popup for displaying coordinate information
    // const popup = new Overlay({
    //   element: document.getElementById('popup'),
    //   positioning: 'bottom-center',
    //   stopEvent: false,
    // });
    // map.addOverlay(popup);

    // // Add a click event handler to the map
    // map.on('click', function (evt) {
    //   const coordinate = evt.coordinate;
    //   console.log("coooo" + coordinate);
    //   const formattedCoordinate = toStringHDMS(coordinate);
    //   console.log("forcoooo" + formattedCoordinate);

    //   // Display the coordinate information in the popup
    //   document.getElementById('popup-content').innerHTML = formattedCoordinate;

    //   // Show the popup
    //   popup.setPosition(coordinate);
    // });





const iconFeature = new Feature({
  geometry: new Point([0, 0]),
  name: 'Null Island',
  population: 4000,
  rainfall: 500,
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png',
  }),
});

iconFeature.setStyle(iconStyle);

const vectorSource = new VectorSource({
  features: [iconFeature],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new OGCMapTile({
    url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
    crossOrigin: '',
  }),
});

const target = document.getElementById('map');
const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: target,
  view: new View({
    center: [0, 0],
    zoom: 3,
  }),
});

const modify = new Modify({
  hitDetection: vectorLayer,
  source: vectorSource,
});
modify.on(['modifystart', 'modifyend'], function (evt) {
  target.style.cursor = evt.type === 'modifystart' ? 'grabbing' : 'pointer';
});
const overlaySource = modify.getOverlay().getSource();
overlaySource.on(['addfeature', 'removefeature'], function (evt) {
  target.style.cursor = evt.type === 'addfeature' ? 'pointer' : '';
});

map.addInteraction(modify);

return () => {
  // Cleanup when the component unmounts
  // map.setTarget(null);
};



  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '1800px' }}></div>
      {/* <div id="marker" style={{ display: 'none' }}> */}
      {/* <div id="marker">
        <div className="marker">
        </div>
      </div>
      <div id="popup" className="ol-popup" style={{zIndex:10}}>
        <a href="#" id="popup-closer" className="ol-popup-closer"></a>
        <div id="popup-content">Latitude and Longitude will be displayed here.</div>
      </div> */}
    </div>
  );
}

export default OpenLayersMap;

