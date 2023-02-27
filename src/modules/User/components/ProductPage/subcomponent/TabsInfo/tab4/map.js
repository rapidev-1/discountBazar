import { Popover } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import DiscountBazarIcon from '../../../../../../../common/Icons'
import RoutingMachine from './RouteMachine'
const Map = () => {
  const lat1 = 33.683739
  const lng1 = 73.011259
  const lat2 = 33.64472
  const lng2 = 72.98944
  const center = [(lat1 + lat2) / 2, (lng1 + lng2) / 2]
  const timer = 3000
  const [reCalc, setReCalc] = useState(false)
  const centered = useRef(false)

  const ReaCalculate = () => {
    const map = useMap();
    map.setView([lat1, lng1], 16);
    setReCalc(false)
    return null;
  }

  function ChangeView({ center, zoom }) {
    const map = useMap();
    setTimeout(() => {
      map.setView(center, zoom);
    }, timer);
    centered.current = true
    return null;
  }


  let markericons = ".leaflet-marker-icon"
  markericons = document.querySelectorAll(markericons)
  // markericons is array of marker icons in map, we can change icon by markericons[0].src=""

  return (
    <MapContainer
      trackResize
      zoom={14}
      style={{
        minHeight: 500
      }}
      center={center}
      scrollWheelZoom={true} >


      <TileLayer
        attribution='Discount Bazar'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat1, lng1]} >
        <Popup
          closeButton={false}
          className='youiconmap'>
          (You)
        </Popup>
      </Marker>
      <Marker autoPan={true} position={[lat2, lng2]}>
        <Popup
          closeButton={false}
          className='vendoriconmap'>
          (Vendor)
        </Popup>
      </Marker>

      <Popover title="User" trigger={"hover"}>
        <DiscountBazarIcon
          icon={"user"}
          className={"recalculate"}
          onClick={() => setReCalc(e => !e)} />
      </Popover>
      <RoutingMachine destination={[lat2, lng2]} source={[lat1, lng1]} />
      {centered.current === false && <ChangeView center={[lat1, lng1]} zoom={18} />}
      {reCalc && <ReaCalculate />}
    </MapContainer >
  )
}

export default Map