import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import RoutingMachine from './RouteMachine'
const Map = () => {
  const lat1 = 33.683739
  const lng1 = 73.011259
  const lat2 = 33.64472
  const lng2 = 72.98944
  const center = [(lat1 + lat2) / 2, (lng1 + lng2) / 2]
  const timer = 5000

  const [timeup, settimeup] = useState(false)

  setTimeout(() => {
    settimeup(true)
  }, timer);


  function ChangeView({ center, zoom }) {
    setTimeout(() => {
      map.setView(center, zoom);
    }, timer);
    const map = useMap();

    return null;
  }
  return (
    <MapContainer
      trackResize
      zoom={14}
      style={{
        minHeight: 500
      }}
      center={center}
      scrollWheelZoom={true} >
      <ChangeView center={[lat1, lng1]} zoom={18} />

      <TileLayer
        attribution='Discount Bazar'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat1, lng1]}>
        <Popup autoPan>
          (You)
        </Popup>
      </Marker>
      <Marker position={[lat2, lng2]}>
        <Popup autoPan>
          (Vendor)
        </Popup>
      </Marker>
      <RoutingMachine destination={[lat2, lng2]} source={[lat1, lng1]} />
    </MapContainer >
  )
}

export default Map