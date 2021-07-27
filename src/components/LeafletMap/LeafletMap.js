import React, { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

const LeafletMap = () => {
  return (
    <div>
      {useHasMounted && (
        <MapContainer
          center={[51.97551135613125, 5.943738292462035]}
          zoom={12}
          style={{ height: "315px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.97551135613125, 5.943738292462035]}>
            <Popup>De hoofdlocatie van NEXT Arnhem.</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  )
}

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

export default LeafletMap
