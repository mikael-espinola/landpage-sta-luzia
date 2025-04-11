"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useRef } from "react";

const Maps = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "400px" }}>
      <GoogleMap
        center={{ lat: -5.759283919024122, lng: -35.2428610065078 }}
        zoom={18}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker
          position={{ lat: -5.759283919024122, lng: -35.2428610065078 }}
        />
      </GoogleMap>
    </div>
  );
};

export default Maps;
