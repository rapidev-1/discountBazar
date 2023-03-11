import React, { useEffect } from 'react'
import useGeolocation from '../../../../../../../common/hooks/useGeoLocation'
import { setdefault } from '../../../../../../../Store/Features/mapslice'
import Map from '../../../../../../../common/map'
import { useDispatch, useSelector } from 'react-redux'


function ProductGeoMap() {
  useGeolocation()
  const dispatch = useDispatch()
  const { loading, coordu } = useSelector(state => state.map)

  useEffect(() => {
    const lat1 = 33.683739
    const lng1 = 73.011259
    dispatch(setdefault([lat1, lng1]))
  }, [])
  return (
    (!loading && coordu.length === 2) ? <Map routing /> : coordu
  )
}

export default ProductGeoMap