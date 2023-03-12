import React, { useEffect } from 'react'
import useGeolocation from '../../../../../../../common/hooks/useGeoLocation'
import { setaddress, setcoordsu, setcoordsv, setdefault } from '../../../../../../../Store/Features/mapslice'
import Map from '../../../../../../../common/map'
import { useDispatch, useSelector } from 'react-redux'


function ProductGeoMap() {
  useGeolocation()
  const dispatch = useDispatch()
  const { coordu, coordv } = useSelector(state => state.map)

  useEffect(() => {
    const lat1 = 33.683739
    const lng1 = 73.011259
    dispatch(setdefault([lat1, lng1]))
    dispatch(setcoordsv([33.64472, 72.98944]))

    // console.log({ coordu, coordv });
    return () => {
      dispatch(setaddress(''))
      dispatch(setcoordsv([]))
      dispatch(setcoordsu([]))
    }
  }, [dispatch])

  return (
    (coordu.length === 2 && coordv.length === 2) ?
      <Map routing zoomControl /> : null
  )
}

export default ProductGeoMap