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