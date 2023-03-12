import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setaddress, setcoordsu, setLoading } from "../../../Store/Features/mapslice"
import useNotifications from "../useNotifications"

function useGeolocation() {
    const [open, setOpen] = useState(false)
    const { openNotification } = useNotifications()
    const dispatch = useDispatch()
    const state = useSelector(state => state.map.coordu)
    const [coords, setcoords] = useState([])

    const API_URL = "https://nominatim.openstreetmap.org/reverse"

    async function reverseGeocode(latitude, longitude) {
        const url = `${API_URL}?format=json&lat=${latitude}&lon=${longitude}`
        try {
            const response = await fetch(url)
            const data = await response.json()

            dispatch(setaddress(data.display_name))
            return data.display_name
        } catch (error) {
            return console.log(error)
        }
    }


    const requestLocationPermission = async () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(async (permissionStatus) => {
                dispatch(setLoading(true))
                const state = permissionStatus.state
                if (state === "granted" || state === "prompt" || state === "denied") {
                    if (state === 'denied' || state === 'prompt') {
                        setOpen("Allow Location")
                    }
                    navigator.geolocation.getCurrentPosition(
                        async (position) => {
                            const coords = [position.coords.latitude, position.coords.longitude]
                            setcoords(coords)
                            dispatch(setcoordsu(coords))
                            await reverseGeocode(position.coords.latitude, position.coords.longitude)

                        },
                        (error) => {
                            setOpen("Turn on your GPS")
                        }
                    )
                } else {
                    setOpen("Location permission not granted")
                }
                dispatch(setLoading(false))
            })


    }
    useEffect(() => {
        if (coords[0] === state[0] && coords[1] === state[1])
            return
        reverseGeocode(state[0], state[1])
    }, [state])
    useEffect(() => {
        requestLocationPermission()
        return () => {
            dispatch(setLoading(false))
            setOpen(false)
        }
    }, [])

    const count = useRef(0)
    if (open) {
        // if (count.current === 0) {
        openNotification(open)
        count.current++
        setOpen(false)
        // }
    }
    return { reverseGeocode }
}

export default useGeolocation
