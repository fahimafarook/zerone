
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';

import React from 'react'

function LeafMap() {
  const [center, setCenter] = useState([11.2359071, 78.8386118]);
  const [zoom, setZoom] = useState(15);
  return (
    <div>
      <div>
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default LeafMap
