import React from 'react'

const Card = ({name}) => {
  return (
    <input type="button" style={{width: '300px', height: '125px'}} value={name} /> 
  )
}

export default Card