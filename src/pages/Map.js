import React, { useEffect, useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const Map = () => {
    const [location, setLocation] = useState({})
    const [defaultCenter, setDefaultCenter] = useState({})
    const mapStyles = {
        height: "100vh",
        width: "100%",
        borderRadius: "7px",
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (e) => {
                    let lat = e.coords.latitude
                    let long = e.coords.longitude
                    setLocation({
                        name: "FooBar",
                        location: {
                            lat: lat,
                            lng: long,
                        },
                    })
                    setDefaultCenter({
                        lat: lat,
                        lng: long,
                    })
                },
                () => {
                    alert("Your Browser does not support Google Maps")
                }
            )
        }
    }, [])
    return (
        <div>
            <LoadScript>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                    {
                        <Marker
                            key={location.name}
                            position={location.location}
                        />
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Map
