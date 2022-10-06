import React from 'react'
import { useLocation } from 'react-router-dom'

const ItemView = () => {
    const location = useLocation();

  return (
    <>
        <strong> Name: </strong> {location.state.name} <br />
        <strong> Description: </strong> {location.state.description}
    </>
  )
}

export default ItemView

//This class may need to be removed due to state loss issues with the Google Map view