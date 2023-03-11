import { Popover } from 'antd'
import { Fragment, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import DiscountBazarIcon from '../Icons'
import RoutingMachine from './RouteMachine'
const Map = ({ height, routing, la1, la2, ln1, ln2 }) => {
  console.log(la1, ln1);
  const lat1 = la1 ? la1 : 33.683739
  const lng1 = ln1 ? ln1 : 73.011259
  const lat2 = la2 ? la2 : 33.64472
  const lng2 = ln2 ? ln2 : 72.98944
  let center = routing ? [(lat1 + lat2) / 2, (lng1 + lng2) / 2] : [lat1, lng1]

  const timer = 3000
  const [reCalc, setReCalc] = useState(false)
  const centered = useRef(false)

  const ReaCalculate = () => {
    console.log("called");
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
        minHeight: height ? height : 500,
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
      {
        routing ?
          <Marker autoPan={true} position={[lat2, lng2]}>
            <Popup
              closeButton={false}
              className='vendoriconmap'>
              (Vendor)
            </Popup>
          </Marker> : null
      }
      <Popover title="User" trigger={"hover"}>
        <DiscountBazarIcon
          icon={"user"}
          className={"recalculate"}
          onClick={() => setReCalc(e => !e)} />
      </Popover>
      {reCalc ? <ReaCalculate /> : null}

      {
        routing ?
          <Fragment>

            <RoutingMachine destination={[lat2, lng2]} source={[lat1, lng1]} />
            {centered.current === false && <ChangeView center={[lat1, lng1]} zoom={18} />}
          </Fragment> : null
      }
    </MapContainer >
  )
}

export default Map