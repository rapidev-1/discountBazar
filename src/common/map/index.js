import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import LeafletGeocoder from "./geocoder";
import LeafletRoutingMachine from "./RouteMachine";
import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DiscountBazarIcon from '../Icons'

function MAP({ height, zoom, routing, zoomControl }) {
  const state = useSelector(state => state.map)
  const userPosition = state.coordu
  const vendorPosition = state.coordv;
  const [reCalc, setReCalc] = useState(false)

  const ref = useRef()
  const ref2 = useRef()
  const mapRef = useRef(null)


  const ReaCalculate = () => {
    const map = useMap();
    map.setView(userPosition, 16);
    setReCalc(false)
    return null;
  }


  if (mapRef.current) {
    // mapRef.current.on('click', (e) => {
    //   if (e.containerPoint.x < 50) return
    //   const latlng = e.latlng
    //   // return console.log(latlng);
    //   dispatch(setcoordsu([latlng['lat'], latlng['lng']]))
    // })
  }


  useEffect(() => {
    return () => {
      mapRef.current = null
      ref.current = null
      ref2.current = null
    }
  }, [])

  return (
    <MapContainer
      style={{ minHeight: height ? height : "500px" }}
      center={userPosition}
      zoom={zoom ? zoom : 14}
      dragging={true}
      touchZoom={zoomControl}
      zoomControl={zoomControl}
      scrollWheelZoom={zoomControl}
    >
      <TileLayer
        attribution='Discount Bazar'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LeafletGeocoder /> */}


      <Marker position={userPosition}>
        <Popup className='youiconmap'>
          (You)
        </Popup>
      </Marker>

      {
        routing ?
          <Fragment>
            <Marker position={vendorPosition} ref={ref2}>
              <Popup
                className='vendoriconmap'>
                (Vendor)
              </Popup>
            </Marker>

            {/* <Marker position={position}>
              <Popup
                className='default'>
                (default)
              </Popup>
            </Marker> */}


            <DiscountBazarIcon
              icon={"user"}
              className={"recalculate"}
              onClick={() => setReCalc(e => !e)} />

            <LeafletRoutingMachine source={userPosition} destination={vendorPosition} />

            {reCalc ? <ReaCalculate /> : null}

          </Fragment>
          : null
      }
    </MapContainer>
  );
}

export default MAP;
