import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// This component imports the React Google Maps API library and implements it.
// Data is passed down to the GoogleMap component as props.

// This sets the map size in the app. This gets passed into the GoogleMap component in the mapContainerStyle attribute
const mapStyle = {
    height: '100vh',
    width: '100%',
  }

// This constant sets the center point of the map, currently Los Angeles
const center = {
  lat: 34.052,
  lng: -118.244
};

function MyComponent({itemLocations}) {

  // This is the array of saved locations pulled from the database

  // This is the current selected pin on the map
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  // useEffect(() => {
  //   fetch('api/locations')
  //     .then(res => res.json())
  //     .then((locations) => {
  //       if (!Array.isArray(locations)) locations = [];
  //       setSavedLocations(locations);
  //     })
  // })

  // Refer to the slim google maps API library documentation for built in methods an props
  return (
    <LoadScript
     // Add in your own Google Maps API key here
      googleMapsApiKey="AIzaSyBRacG1Uw6S2XcqqqA50dnaTRUSwiJ2Gg4"
    >
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={mapStyle}
      >
        {
          itemLocations.map(item => {
            return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />
            )
          })
        }
        {
          selected.location && 
          (
            <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
              <p>
                <p>{selected.name}</p>
                <p>{selected.street_address}</p>
                <p>{selected.city}</p>
                <p>{selected.state}</p>
                <p>{selected.zip_code}</p>
                <p>{selected.caption}</p>
              </p>
            </InfoWindow>
          )
        }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)