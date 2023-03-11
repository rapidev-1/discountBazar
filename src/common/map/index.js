import { Popover } from 'antd'
import { Fragment, useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, SVGOverlay, TileLayer, useMap } from 'react-leaflet'
import DiscountBazarIcon from '../Icons'
import RoutingMachine from './RouteMachine'
import { useSelector, useDispatch } from "react-redux"
import { setcoordsu, setdefault } from '../../Store/Features/mapslice'

const Map = ({ height, routing, la1, la2, ln1, ln2, zoom }) => {
  // const lat1 = la1 ? la1 : 33.683739
  // const lng1 = ln1 ? ln1 : 73.011259
  const lat2 = la2 ? la2 : 33.64472
  const lng2 = ln2 ? ln2 : 72.98944

  const dispatch = useDispatch();
  const state = useSelector(state => state.map)
  const userp = state['coordu']
  const vendorp = [lat2, lng2] || state['coordv'];
  const defaultcoords = state['defaultcoords'];
  const timer = 3000;
  // const [userp, setuserp] = useState([lat1, lng1])
  // const [vendorp, setvendorp] = useState([lat2, lng2])
  const center =
    routing ? [(userp[0] + vendorp[0]) / 2, (userp[1] + vendorp[1]) / 2] :
      userp

  const [reCalc, setReCalc] = useState(false)
  const [reDefault, setreDefault] = useState(false)
  const centered = useRef(false)

  const ReaCalculate = () => {
    // console.log("called");
    // const map = useMap();
    // map.setView(userp, 16);
    // setReCalc(false)
    return null;
  }

  // const DefaultCoordinates = () => {
  //   console.log("");
  //   const map = useMap();
  //   dispatch(setcoordsu(defaultcoords))
  //   map.setView(defaultcoords, 16);
  //   setreDefault(false)
  //   return null;
  // }

  function ChangeView({ center, zoom }) {
    // const map = useMap();
    // setTimeout(() => {
    //   map.setView(center, zoom);
    // }, timer);
    // centered.current = true
    // return null;
  }

  const mapRef = useRef(null)
  if (mapRef.current) {
    // mapRef.current.on('click', (e) => {
    //   if (e.containerPoint.x < 50) return
    //   const latlng = e.latlng
    //   // return console.log(latlng);
    //   dispatch(setcoordsu([latlng['lat'], latlng['lng']]))
    // })
  }

  useEffect(() => {
    setInterval(() => {
      dispatch(setdefault([userp[0] + .08, userp[1] + .2]))
    }, 3000);
  }, [])

  // let markericons = ".leaflet-marker-icon"
  // markericons = document.querySelectorAll(markericons)
  // markericons is array of marker icons in map, we can change icon by markericons[0].src=""


  return (
    <MapContainer
      // trackResize
      zoom={zoom ? zoom : 14}
      style={{
        minHeight: height ? height : 500,
      }}
      center={center}

      // scrollWheelZoom={true}

      ref={mapRef}
      dragging={false}
    // inertiaDeceleration

    >


      <TileLayer
        attribution='Discount Bazar'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={userp}>
        <Popup
          closeButton={false}
          className='youiconmap'>
          (You)
        </Popup>
      </Marker>
      {
        routing ?
          <Marker autoPan={true} position={vendorp}>
            <Popup
              closeButton={false}
              className='vendoriconmap'>
              (Vendor)
            </Popup>
          </Marker>
          : null
      }
      {
        routing ?
          <Marker autoPan={true} position={defaultcoords}>
            <Popup
              closeButton={false}
              className='default'>
              (default)
            </Popup>
          </Marker>
          : null
      }
      <Popover title="User" trigger={"hover"}>
        <DiscountBazarIcon
          icon={"user"}
          className={"recalculate"}
          onClick={() => setReCalc(e => !e)} />
      </Popover>
      {
        defaultcoords[0] === userp[0] && defaultcoords[1] === userp[1] ?
          null :
          <Popover title="Recenter" trigger={"hover"}>
            <DiscountBazarIcon
              icon={"navigate"}
              className={"recalculate recenter"}
              onClick={() => setreDefault(true)} />
          </Popover>
      }
      {reCalc ? <ReaCalculate /> : null}
      {/* {reDefault ? <DefaultCoordinates /> : null} */}

      {
        routing ?
          <Fragment>

            <RoutingMachine
              destination={vendorp}
              source={userp}
              key={new Date().getMilliseconds()}
            />
            {centered.current === false && <ChangeView
              center={userp} zoom={18} />}
          </Fragment> : null
      }
    </MapContainer >
  )
}

export default Map