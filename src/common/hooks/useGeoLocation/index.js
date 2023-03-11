import { useEffect, useRef, useState } from "react"
import useNotifications from "../useNotifications"

function useGeolocation() {
    const [coordinates, setCoordinates] = useState([])
    const [address, setAddress] = useState("")
    const [open, setOpen] = useState(false)
    const [loading, setloading] = useState(false)
    const { openNotification } = useNotifications()

    const API_URL = "https://nominatim.openstreetmap.org/reverse"

    function reverseGeocode(latitude, longitude) {
        const url = `${API_URL}?format=json&lat=${latitude}&lon=${longitude}`
        return fetch(url)
            .then(response => response.json())
            .then(data => data.display_name)
            .catch(error => console.log(error))
    }


    const requestLocationPermission = async () => {
        navigator.permissions
            .query({ name: "geolocation" })
            .then(async (permissionStatus) => {
                setloading(true)
                const state = permissionStatus.state
                if (state === "granted" || state === "prompt" || state === "denied") {
                    if (state === 'denied' || state === 'prompt') {
                        setOpen("Allow Location")
                    }
                    navigator.geolocation.getCurrentPosition(
                        async (position) => {
                            setCoordinates([position.coords.latitude, position.coords.longitude])
                            await reverseGeocode(position.coords.latitude, position.coords.longitude).then(address => {
                                setAddress(address)
                            }
                            )
                        },
                        (error) => console.log(error)
                    )
                } else {
                    setOpen("Location permission not granted")
                }
                setloading(false)
            })


    }

    useEffect(() => {
        requestLocationPermission()
        return () => {
            setloading(false)
            setOpen(false)
            setAddress(false)
        }
    }, [])

    const count = useRef(0)
    if (open !== false) {
        if (count.current === 0) {
            openNotification(open)
            count.current++
            setOpen(false)
        }
    }
    return { coordinates, address, loading }
}

export default useGeolocation
