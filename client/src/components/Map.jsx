import { React, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.googleApi
  });

  return <MapView />;
};

export default Map;

function MapView() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: 80 }}
      mapContainerClassName="map-container"
    >
      <Marker />
    </GoogleMap>
  );
}